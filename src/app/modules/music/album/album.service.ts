import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import {Album} from '../../../shared/models/items';
import {AlbumHistory} from '../../../shared/models/local-storage/album-history';
import {AlbumsCacheLocalStorage} from '../../../shared/models/local-storage/albums-cache-local-storage';
import {environment as env} from '../../../../environments/environment';
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private store: Store<fromApp.AppState>) { }

  public getAlbumFromCache(id: string): Album {
    const albumCache: AlbumsCacheLocalStorage = this.getAlbumsHistory();
    if (albumCache?.albums) {
      return albumCache?.albums.find(item => item.id === id);
    }

    return null;
  }

  /**
   * Public method for updating the User recently viewed albums in Local Storage. At the end
   * It dispatch an action to update the "searchedAlbums" property from Music State
   *
   * @param album Current selected album
   */
  public saveAlbumToUserHistory(album: Album): void {
    this.store.select('auth')
      .pipe(
        take(1),
        map(authState => authState?.user?.id)
      )
      .subscribe((userId: string) => {
        const albumCache: AlbumsCacheLocalStorage = this.getAlbumsHistory();
        const albumHistory = albumCache?.albumHistory;

        if (albumHistory && userId) {
          const currentUserAlbumHistory: AlbumHistory = this.findUserAlbumHistory(albumHistory, userId);
          const updatedUserAlbums: Album[] = this.updateAlbumHistory(currentUserAlbumHistory.albums, album);

          // Updating only the current user history
          const updatedAlbumHistory = albumHistory.filter( item => item.userId !== userId);
          updatedAlbumHistory.push({userId, albums: updatedUserAlbums});

          // Updating the whole LS object
          albumCache.albumHistory = updatedAlbumHistory;
          albumCache.albums = this.updateAlbumCache(albumCache?.albums, album);

          localStorage.setItem(env.albumsCache, JSON.stringify(albumCache));
          this.store.dispatch(new MusicActions.SetRecentlyViewedAlbums(updatedUserAlbums));

        } else {

          const newAlbumCache: AlbumsCacheLocalStorage = {
            albumHistory: [{ userId, albums: [album]}],
            albums: this.updateAlbumCache(albumCache?.albums, album)
          };

          localStorage.setItem(env.albumsCache, JSON.stringify(newAlbumCache));
          this.store.dispatch(new MusicActions.SetRecentlyViewedAlbums([album]));
        }
      });
  }

  /**
   * Will get only the user logged in album history.
   *
   * @param userId Current logged in User
   */
  public getUserAlbumHistory(userId: string): AlbumHistory{
    const albumCache: AlbumsCacheLocalStorage = this.getAlbumsHistory();
    return this.findUserAlbumHistory(albumCache?.albumHistory, userId);
  }

  /**
   * Will return only the user logged from an {@link AlbumHistory} array.
   *
   * @param albumHistory Current Album History
   * @param userId Current logged in User
   */
  private findUserAlbumHistory(albumHistory: AlbumHistory[], userId: string): AlbumHistory {
    if (albumHistory) {
      const userAlbum = albumHistory.find(item => item.userId === userId);
      return userAlbum ? userAlbum : { userId, albums: []};
    }

    return { userId, albums: []};
  }

  /**
   * Will add a Album in the user's albumsCache Local Storage, if it's not already in there.
   *
   * @param currentAlbumHistory The user current recent viewed albums stored in LS
   * @param album The album being added
   */
  private updateAlbumHistory(currentAlbumHistory: Album[], album: Album): Album[] {

    if (this.isAlreadyInCache(currentAlbumHistory, album)) {
      return currentAlbumHistory;
    }

    if (currentAlbumHistory.length >= 10) {
      const reducedAlbumHistory = currentAlbumHistory.slice(0 , 9);
      return [album, ...reducedAlbumHistory];
    } else {
      return [album, ...currentAlbumHistory];
    }
  }

  /**
   * Function to store album in Local Storage Cache
   *
   * @param currentAlbumCache The current album cache state retrieved from LS
   * @param album The album being stored in cache
   */
  private updateAlbumCache(currentAlbumCache: Album[], album: Album): Album[] {
    const albums = currentAlbumCache || [];

    if (this.isAlreadyInCache(currentAlbumCache, album)) {
      return albums;
    }

    let updatedAlbums;

    if (albums.length >= 10) {
      const reducedAlbums = albums.slice(0 , 9);
      updatedAlbums = [album, ...reducedAlbums];
    } else {
      updatedAlbums = [album, ...albums];
    }

    return updatedAlbums;
  }

  // Helpers
  private isAlreadyInCache(albumsArr: Album[], album: Album): boolean {
    return albumsArr?.some(item => item.id === album.id);
  }

  private getAlbumsHistory(): AlbumsCacheLocalStorage{
    return JSON.parse(localStorage.getItem(env.albumsCache));
  }
}
