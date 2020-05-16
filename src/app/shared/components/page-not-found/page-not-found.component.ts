import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div>
      <h1 class="text-center">Sorry</h1>
      <h2 class="text-center">We couldn't find this page.</h2>

      <a class="text-center" routerLink="/music">Back to Music</a>
    </div>
  `,
  styles: [`
    div {
      margin-top: 50%;
      transform: translateY(-100%);
      width: 100%;
      height: 100%;
    }
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 3em;
    }
    a {
      color: #1ED760;
      text-decoration: none;
      font-size: 2em;
      display: block;
    }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
