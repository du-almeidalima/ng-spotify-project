import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {map, take, withLatestFrom} from "rxjs/operators";
import {AlbumService} from "./album.service";
import {AlbumHistory} from "../../../shared/models/local-storage/album-history";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

/**
 * This resolver will ensure that the last viewed Albums History is loaded when the user visits 'search/...' route
 */
@Injectable({
  providedIn: 'root'
})
export class AlbumHistoryResolverService implements Resolve<void>{

  constructor(private store: Store<fromApp.AppState>, private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    this.store.select('auth')
      .pipe(
        take(1),
        withLatestFrom(this.store.select('music')),
        map(([authState, musicState]) => {
          return { authState, musicState }
        })
      )
      .subscribe( ({authState, musicState}) => {
        if (musicState.searchedAlbums.length === 0) {
          const cachedAlbumHistory: AlbumHistory = this.albumService.getUserAlbumHistory(authState.user.id);
          this.store.dispatch(new MusicActions.SetRecentlyViewedAlbums(cachedAlbumHistory.albums))
        }
      })
  }
}
