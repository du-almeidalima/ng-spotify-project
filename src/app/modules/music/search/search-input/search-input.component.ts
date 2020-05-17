import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from '../../../../store/app.reducer';
import * as MusicActions from '../../store/music.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  private searchTimeoutId: any;

  constructor(private store: Store<fromApp.AppState>) { }

  public onType(e) {
    clearTimeout(this.searchTimeoutId)
    this.searchTimeoutId = setTimeout(() => {
      const searchTerm = e.target.value;
      if (searchTerm !== '') {
        this.store.dispatch(new MusicActions.StartSearch(searchTerm))
      } else {
        this.store.dispatch(new MusicActions.ClearSearchResult())
      }
    }, 1000)
  }
}
