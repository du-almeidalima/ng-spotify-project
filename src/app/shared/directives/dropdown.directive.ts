import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input()
  public dropdownMenu: HTMLDivElement;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  public onClick(){
    if (!this.dropdownMenu.classList.contains('show')) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

  // For closing the Dropdown from Anywhere
  @HostListener('document:click',['$event'])
  public onOuterClick(event: Event){

    if (! this.elRef.nativeElement.contains(event.target)){
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }
}
