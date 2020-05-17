import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
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
export class SearchResultComponent implements OnInit{

  public searchResult: SearchResult;
  public isLoading = false;

  constructor( private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('music')
      .subscribe(musicState => {
        console.log(musicState)
        this.searchResult = musicState.searchResult;
        this.isLoading = musicState.isLoading;
      });
  }

  getResultItem(item: Item): SearchResultItem {
    return ItemMapper.mapToSearchResultItem(item)
  }
}
