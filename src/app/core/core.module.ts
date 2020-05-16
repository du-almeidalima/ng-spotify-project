import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "./auth/auth.guard";
import { HeaderComponent } from './header/header.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

const CORE_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]
/**
 *  This module will have the core functionalities of this app, such as the auth, home components, interceptors...
 */
@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    SharedModule,
    RouterModule.forChild(CORE_ROUTES)
  ]
})
export class CoreModule {}
