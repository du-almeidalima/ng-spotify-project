import {NgModule} from "@angular/core";
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const AUTH_ROUTES: Routes = [
  { path: 'login', component: AuthComponent }
]

@NgModule({
  declarations: [ AuthComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AUTH_ROUTES)
  ]
})
export class AuthModule { }
