import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";

const CORE_ROUTES: Routes = [
]
/**
 *  This module will have the core functionalities of this app, such as the auth, home components, interceptors...
 */
@NgModule({
  declarations: [],
  imports: [AuthModule]
})
export class CoreModule {}
