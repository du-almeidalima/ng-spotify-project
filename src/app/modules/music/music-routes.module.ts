import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MusicComponent} from "./music.component";
import {SearchAlbumsComponent} from "./search-albums/search-albums.component";

const MUSIC_ROUTES: Routes = [
  { path: '', component: MusicComponent, children:
      [
        { path: '', component: SearchAlbumsComponent}
      ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(MUSIC_ROUTES) ],
  exports: [ RouterModule ]
})
export class MusicRoutesModule {

}
