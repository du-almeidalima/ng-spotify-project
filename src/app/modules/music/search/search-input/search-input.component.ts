import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";
import * as fromApp from '../../../../store/app.reducer';
import * as MusicActions from '../../store/music.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {
  private searchTimeoutId: any;
  private storeSub: Subscription;

  @ViewChild('searchInput')
  public searchInput: ElementRef;

  constructor(
    private store: Store<fromApp.AppState>,
    private location: Location
  ) { }

  ngAfterViewInit(): void {
    // Taking the value on the URL just when the component loads
    this.storeSub = this.store.select('music')
      .pipe(
        take(1),
        map(musicState => musicState.lastSearch)
      )
      .subscribe(lastSearch => {
        this.searchInput.nativeElement.value = lastSearch;
      })
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  public onType(e): void {
    clearTimeout(this.searchTimeoutId);
    const searchTerm = e.target.value;
    // Updating the URL based on Search term
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
