import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from '../../../../store/app.reducer';
import * as MusicActions from '../../store/music.actions';
import {Location} from "@angular/common";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  private searchTimeoutId: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private location: Location
  ) { }

  public onType(e) {
    clearTimeout(this.searchTimeoutId);
    const searchTerm = e.target.value;
    this.location.go('/music/search/' + searchTerm);
    this.searchTimeoutId = setTimeout(() => {
      if (searchTerm !== '') {
        this.store.dispatch(new MusicActions.StartSearch(searchTerm))
      } else {
        this.store.dispatch(new MusicActions.ClearSearchResult());
      }
    }, 1000)
  }
}
