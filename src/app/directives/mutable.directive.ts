import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMutable]'
})
export class MutableDirective {

  mute = true;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.opacity = 0.25;
  }

  @HostListener('click')
  toogleMute() {
    this.mute = !this.mute;
    const opacity = this.mute ? 0.25 : '';
    this.elementRef.nativeElement.style.opacity = opacity;
  }

}
