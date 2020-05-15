import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {environment as env} from '../environments/environment';

import * as fromApp from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeLogger} from "ngrx-store-logger";

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
    AppRoutingModule,
    StoreModule.forRoot(fromApp.reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: env.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
