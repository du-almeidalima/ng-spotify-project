import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MusicComponent} from "./music.component";
import {AuthGuard} from "../../core/auth/auth.guard";
import {SearchComponent} from "./search/search.component";

const MUSIC_ROUTES: Routes = [
  { path: '', component: MusicComponent, canActivate: [AuthGuard], children:
      [
        { path: '', component: SearchComponent}
      ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(MUSIC_ROUTES) ],
  exports: [ RouterModule ]
})
export class MusicRoutesModule {

}
