import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutesModule } from "./music-routes.module";
import { MusicComponent } from "./music.component";
import { SearchAlbumsComponent } from './search-albums/search-albums.component';
import { SearchInputComponent } from './search-albums/search-input/search-input.component';



@NgModule({
  declarations: [
    MusicComponent,
    SearchAlbumsComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MusicRoutesModule
  ]
})
export class MusicModule { }
