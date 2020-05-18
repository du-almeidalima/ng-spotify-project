import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MusicComponent} from "./music.component";
import {AuthGuard} from "../../core/auth/auth.guard";
import {SearchComponent} from "./search/search.component";
import {AlbumComponent} from "./album/album.component";
import {SearchResolverService} from "./search/search-resolver.service";

const MUSIC_ROUTES: Routes = [
  { path: '', component: MusicComponent, canActivate: [AuthGuard], children:
      [
        { path: 'search', redirectTo: 'search/', pathMatch: 'full'},
        { path: 'search/:term', component: SearchComponent, resolve: [SearchResolverService]},
        { path: 'album/:artist', component: AlbumComponent}
      ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(MUSIC_ROUTES) ],
  exports: [ RouterModule ]
})
export class MusicRoutesModule {}
