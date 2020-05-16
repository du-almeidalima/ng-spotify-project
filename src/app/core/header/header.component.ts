import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Subscription} from "rxjs";
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userImg: string;
  private userAuthSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.userAuthSub = this.store.select('auth')
      .pipe( map(authState => authState.user ))
      .subscribe( user => {
        this.userImg = user.profileImg;
      });
  }

  public onLogoutClick(): void {
    this.store.dispatch(new AuthActions.LogOut())
  }
}
