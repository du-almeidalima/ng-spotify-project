import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {SharedModule} from '../../shared/shared.module';

const AUTH_ROUTES: Routes = [
  { path: 'login', component: AuthComponent }
];

@NgModule({
  declarations: [ AuthComponent ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(AUTH_ROUTES),
        SharedModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
