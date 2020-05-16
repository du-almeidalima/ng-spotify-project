import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from './store/app.reducer';
import * as AuthActions from './core/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin())
  }
}

/*
 * The auto login kicks in every time the app launches, it checks if the user have a JWT stored in the Local Storage
 */
