import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MusicComponent} from "./music.component";
import {AuthGuard} from "../../core/auth/auth.guard";

const MUSIC_ROUTES: Routes = [
  { path: '', component: MusicComponent, children:
      [

      ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(MUSIC_ROUTES) ],
  exports: [ RouterModule ]
})
export class MusicRoutesModule {

}
