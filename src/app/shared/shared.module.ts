import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { ResponseMessageComponent } from './components/error-message/response-message.component';

@NgModule({
  declarations: [
    DropdownDirective,
    PageNotFoundComponent,
    LoadingComponent,
    ResponseMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DropdownDirective,
    PageNotFoundComponent,
    LoadingComponent,
    ResponseMessageComponent
  ]
})
export class SharedModule {

}
