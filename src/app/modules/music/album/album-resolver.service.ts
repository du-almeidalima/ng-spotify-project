import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Album } from "../../../shared/models/items";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverService implements Resolve<Album>{

  constructor(private store: Store<fromApp.AppState>, private action$: Actions) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Album> | Promise<Album> | Album {

    const albumId = route.paramMap.get('albumId')

    if (!albumId) {
      return null;
    }

    this.store.dispatch(new MusicActions.StartAlbumSearch(albumId))
    return this.action$.pipe(
      ofType(MusicActions.SET_ALBUM),
      take(1)
    );
  }
}
