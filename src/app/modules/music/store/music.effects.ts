import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { environment as env } from "../../../../environments/environment";
import { SearchResponse } from "../../../shared/models/api/search-response";
import { SearchResult } from "../../../shared/models/search-result";
import { ItemMapper } from "../../../shared/utils/item-mapper";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';

@Injectable()
export class MusicEffects {
private readonly SEARCH = env.baseUrl + env.search;
private readonly SEARCH_TYPES = env.searchType;

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private http: HttpClient
  ) {}

  // Effects
  @Effect()
  searchStart = this.actions$.pipe(
    ofType(MusicActions.START_SEARCH),
    switchMap((searchTerm: MusicActions.StartSearch) => {
      let params = new HttpParams().set('type', this.SEARCH_TYPES);
      params = params.set('q', searchTerm.payload);

      return this.http.get<SearchResponse>(
        this.SEARCH,
        {
          params: params
        }
      ).pipe(
        map((searchResponse: SearchResponse) => {
          return this.handleSearchResult(searchResponse)
        })
      )
    })
  )

  // Handlers
  private handleSearchResult(searchResponse: SearchResponse): MusicActions.MusicActions {
    const mappedResponse: SearchResult = ItemMapper.mapToSearchResult(searchResponse);
    return new MusicActions.SetSearchResult(mappedResponse);
  }
}
