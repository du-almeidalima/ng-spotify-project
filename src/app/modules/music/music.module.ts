import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutesModule } from "./music-routes.module";
import { MusicComponent } from "./music.component";



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    MusicRoutesModule
  ]
})
export class MusicModule { }
