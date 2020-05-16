import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DropdownDirective } from './directives/dropdown.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DropdownDirective,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DropdownDirective,
    PageNotFoundComponent
  ]
})
export class SharedModule {

}
