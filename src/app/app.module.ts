import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutesModule} from './app-routes.module';
import {AppComponent} from './app.component';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {environment as env} from '../environments/environment';

import * as fromApp from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeLogger} from "ngrx-store-logger";
import {CoreModule} from "./core/core.module";

// For Console Logging the State
function logger(reducer: ActionReducer<fromApp.AppState>): any {
  return storeLogger({
    timestamp: false,
    duration: false
  })(reducer);
}

const metaReducers = env.production ? [] : [ logger ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    StoreModule.forRoot(fromApp.reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: env.production }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
