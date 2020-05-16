import {NgModule} from "@angular/core";
import {AuthModule} from "./auth/auth.module";
import {HeaderComponent} from './header/header.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

/**
 *  This module will have the core functionalities of this app, such as the auth, home components, interceptors...
 */
@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    SharedModule
  ]
})
export class CoreModule {}
