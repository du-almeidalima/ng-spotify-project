import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutesModule } from "./music-routes.module";
import { MusicComponent } from "./music.component";
import {SearchInputComponent} from "./search/search-input/search-input.component";
import {SearchResultComponent} from "./search/search-result/search-result.component";
import {ResultItemComponent} from "./search/search-result/item/result-item.component";
import {SearchComponent} from "./search/search.component";



@NgModule({
  declarations: [
    MusicComponent,
    SearchComponent,
    SearchResultComponent,
    SearchInputComponent,
    ResultItemComponent
  ],
  imports: [
    CommonModule,
    MusicRoutesModule
  ]
})
export class MusicModule { }
