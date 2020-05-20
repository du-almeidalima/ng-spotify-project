import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MusicRoutesModule} from "./music-routes.module";
import {MusicComponent} from "./music.component";
import {SearchInputComponent} from "./search/search-input/search-input.component";
import {SearchResultComponent} from "./search/search-result/search-result.component";
import {ResultItemComponent} from "./search/search-result/item/result-item.component";
import {SearchComponent} from "./search/search.component";
import {SharedModule} from "../../shared/shared.module";
import {AlbumComponent} from './album/album.component';
import {TrackComponent} from './album/track-list/track/track.component';
import {TracksListComponent} from "./album/track-list/tracks-list.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    MusicComponent,
    SearchComponent,
    SearchResultComponent,
    SearchInputComponent,
    ResultItemComponent,
    AlbumComponent,
    TracksListComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    MusicRoutesModule,
    InfiniteScrollModule,
    SharedModule
  ]
})
export class MusicModule { }
