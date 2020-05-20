import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<void>{

  constructor(private store: Store<fromApp.AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    if (route.paramMap.get('term')) {
      this.store.dispatch(new MusicActions.StartSearch(route.paramMap.get('term')))
    } else {
      this.store.dispatch(new MusicActions.ClearSearchResult())
    }
  }
}
