import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SearchResult} from "../../../shared/models/search-result";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<SearchResult>{

  constructor(private store: Store<fromApp.AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<SearchResult> | Promise<SearchResult> | SearchResult {

    console.log(route.paramMap.get('term'))
    if (route.paramMap.get('term')) {
      this.store.dispatch(new MusicActions.StartSearch(route.paramMap.get('term')))
    } else {
      this.store.dispatch(new MusicActions.ClearSearchResult())
    }

    return null;
  }
}
