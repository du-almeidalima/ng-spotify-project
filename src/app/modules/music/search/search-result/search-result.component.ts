import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {SearchResult} from "../../../../shared/models/search-result";
import {SearchResultItem} from "../../../../shared/models/search-result-item";
import {ItemMapper} from "../../../../shared/utils/item-mapper";
import {Item} from "../../../../shared/models/items";
import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy{

  public searchResult: SearchResult;
  public isLoading = false;
  private storeSub: Subscription;

  constructor( private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('music')
      .subscribe(musicState => {
        console.log(musicState)
        this.searchResult = musicState.searchResult;
        this.isLoading = musicState.isLoading;
      });
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  getResultItem(item: Item): SearchResultItem {
    return ItemMapper.mapToSearchResultItem(item)
  }
}
