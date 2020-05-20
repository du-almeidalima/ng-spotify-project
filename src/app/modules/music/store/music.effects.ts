import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {environment as env} from "../../../../environments/environment";
import {SearchResponse} from "../../../shared/models/api/search-response";
import {SearchResult} from "../../../shared/models/search-result";
import {ItemMapper} from "../../../shared/utils/item-mapper";
import {MessageSeverity} from "../../../shared/models/enums/message-severity";
import {AlbumSearchResponse} from "../../../shared/models/api/album-search-response";
import {Album} from "../../../shared/models/items";
import * as fromApp from '../../../store/app.reducer';
import * as MusicActions from '../store/music.actions';
import {MusicService} from "../music.service";

@Injectable()
export class MusicEffects {
private readonly SEARCH = env.baseUrl + env.search;
private readonly SEARCH_TYPES = env.searchType;
private readonly ALBUM_SEARCH = env.baseUrl + env.albums;

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private musicService: MusicService
  ) {}

  // Effects
  @Effect()
  startsSearch = this.actions$.pipe(
    ofType(MusicActions.START_SEARCH),
    switchMap((action: MusicActions.StartSearch) => {
      let params = new HttpParams().set('type', this.SEARCH_TYPES);
      params = params.set('q', action.payload);

      return this.http.get<SearchResponse>(
        this.SEARCH,
        {
          params: params
        }
      ).pipe(
        map((searchResponse: SearchResponse) => {
          return this.handleSearchResult(searchResponse)
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.handleSearchFail(err));
        })
      )
    })
  )

  @Effect()
  startAlbumSearch = this.actions$.pipe(
    ofType(MusicActions.START_ALBUM_SEARCH),
    switchMap((action: MusicActions.StartAlbumSearch) => {
      const albumSearchUrl = `${this.ALBUM_SEARCH}/${action.payload}`
      return this.http.get<AlbumSearchResponse>(albumSearchUrl)
        .pipe(
          map((searchResponse: AlbumSearchResponse) => {
            return this.handleAlbumSearchResult(searchResponse)
          }),
          catchError((err: HttpErrorResponse) => {
            return of(this.handleSearchFail(err));
          })
        )
    })
  )

  // Handlers
  private handleSearchResult(searchResponse: SearchResponse): MusicActions.MusicActions {
    const mappedResponse: SearchResult = ItemMapper.mapToSearchResult(searchResponse);
    return new MusicActions.SetSearchResult(mappedResponse);
  }

  private handleSearchFail(errorResponse: HttpErrorResponse): MusicActions.MusicActions {
    return new MusicActions.SearchFail({severity: MessageSeverity.ERROR, message: errorResponse.message});
  }

  private handleAlbumSearchResult(searchResponse: AlbumSearchResponse): MusicActions.SetAlbum {
    const mappedResponse: Album = ItemMapper.mapToAlbumItem(searchResponse);
    this.musicService.saveAlbumToUserHistory(mappedResponse);

    return new MusicActions.SetAlbum(mappedResponse);
  }
}
