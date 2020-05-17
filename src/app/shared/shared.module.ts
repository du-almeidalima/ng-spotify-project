import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DropdownDirective } from './directives/dropdown.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    DropdownDirective,
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DropdownDirective,
    PageNotFoundComponent,
    LoadingComponent
  ]
})
export class SharedModule {

}
