import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {AlbumService} from './album.service';
import {Album} from '../../../shared/models/items';
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverService implements Resolve<Album>{

  constructor(private store: Store<fromApp.AppState>, private action$: Actions, private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Album> | Promise<Album> | Album {

    const albumId = route.paramMap.get('albumId');

    if (albumId) {
      // Check if album is already in cache
      const cachedAlbum = this.albumService.getAlbumFromCache(albumId);
      if (cachedAlbum) {
        this.store.dispatch(new MusicActions.SetAlbum(cachedAlbum));
      } else {
        this.store.dispatch(new MusicActions.StartAlbumSearch(albumId));

        return this.action$.pipe(
          ofType(MusicActions.SET_ALBUM),
          take(1)
        );
      }
    }

    return null;
  }
}
