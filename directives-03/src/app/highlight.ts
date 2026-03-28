import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
