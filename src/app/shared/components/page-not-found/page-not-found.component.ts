import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div>
      <h1 class="text-center">Sorry</h1>
      <h2 class="text-center">We couldn't find this page.</h2>

      <a class="text-center" routerLink="/music/search/">Back to Music</a>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
