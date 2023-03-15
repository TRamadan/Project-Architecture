import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppRed]',
})
export class AppRedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
