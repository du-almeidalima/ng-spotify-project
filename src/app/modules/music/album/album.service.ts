import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Album} from "../../../shared/models/items";
import {AlbumHistory} from "../../../shared/models/local-storage/album-history";
import {environment as env} from "../../../../environments/environment";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private store: Store<fromApp.AppState>) { }

  /**
   * Public method for updating the User recently viewed albums in Local Storage. At the end
   * It dispatch an action to update the "searchedAlbums" property from Music State
   *
   * @param album Current selected album
   */
  public saveAlbumToUserHistory(album: Album): void {
    this.store.select('auth')
      .pipe(
        map(authState => authState?.user?.id)
      )
      .subscribe((userId: string) => {
        const albumHistory = JSON.parse(localStorage.getItem(`${env.albumHistory}`))

        if (albumHistory && userId) {
          const currentUserAlbumHistory: AlbumHistory = this.findUserAlbumHistory(albumHistory, userId);
          const updatedUserAlbums: Album[] = this.updateAlbum(currentUserAlbumHistory.albums, album);

          // Updating only the current user history
          const updatedAlbumHistory = albumHistory.filter( item => item.userId !== userId)
          updatedAlbumHistory.push({userId, albums: updatedUserAlbums})

          localStorage.setItem(env.albumHistory, JSON.stringify(updatedAlbumHistory))
          this.store.dispatch(new MusicActions.SetRecentlyViewedAlbums(updatedUserAlbums))

        } else {
          const newLocalStorageEntry = [{ userId: userId, albums: [album]}]

          localStorage.setItem(env.albumHistory, JSON.stringify(newLocalStorageEntry))
          this.store.dispatch(new MusicActions.SetRecentlyViewedAlbums([album]))
        }
      })
  }

  /**
   * Will get only the user logged in album history.
   *
   * @param userId Current logged in User
   */
  public fetchUserAlbumHistory(userId: string): AlbumHistory{
    const albumHistory = JSON.parse(localStorage.getItem(`${env.albumHistory}`));
    return this.findUserAlbumHistory(albumHistory, userId);
  }

  /**
   * Will return only the user logged from an {@link AlbumHistory} array.
   *
   * @param albumHistory Current Album History
   * @param userId Current logged in User
   */
  private findUserAlbumHistory(albumHistory: AlbumHistory[], userId: string): AlbumHistory {
    if (albumHistory !== null) {
      return albumHistory.find(item => item.userId === userId)
    }

    return { userId, albums: []}
  }

  /**
   * Will add a Album in the user's albumHistory Local Storage, if it's not already in there.
   *
   * @param currentAlbums The user current recent viewed albums stored in LS
   * @param album The album being added
   */
  private updateAlbum(currentAlbums: Album[], album: Album): Album[] {

    let isAlreadyInHistory = currentAlbums.some(item => item.id === album.id);
    if (isAlreadyInHistory) {
      return currentAlbums
    }

    if (currentAlbums.length < 10) {
      return [album, ...currentAlbums]
    } else {
      const reducedAlbums = currentAlbums.slice(1 , 10);
      return [album, ...reducedAlbums]
    }
  }
}
