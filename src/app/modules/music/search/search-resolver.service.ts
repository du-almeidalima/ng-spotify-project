import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {map, take} from "rxjs/operators";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<void>{
  private lastSearch = '';

  constructor(private store: Store<fromApp.AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    this.store.select('music')
      .pipe(
        take(1),
        map(musicState => musicState.lastSearch)
      )
      .subscribe(lastSearch => {
        const term = route.paramMap.get('term')
        if (term && term !== lastSearch) {
          this.lastSearch = term;
          this.store.dispatch(new MusicActions.StartSearch(route.paramMap.get('term')))
        } else if (term === null || term === '') {
          this.store.dispatch(new MusicActions.ClearSearchResult())
        }
      })
  }
}
