import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="background"></div>
    <div class="loading-bars-container">
      <div class="loading-bars">
        <!-- Bars -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  constructor() { }
}
