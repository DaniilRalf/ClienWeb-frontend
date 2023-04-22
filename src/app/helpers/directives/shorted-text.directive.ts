import {AfterViewInit, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: '[shorten-text]'
})
export class ShortedTextDirective implements AfterViewInit {

  public elem: HTMLInputElement

  constructor(private elemRef: ElementRef) {
    this.elem = elemRef.nativeElement
  }

  ngAfterViewInit(): void {
    if (this.elem.innerText && this.elem.innerText.length > 25) {
      const shortenText = this.elem.innerText.slice(0, 25)
      this.elem.innerText = `${shortenText}...`
    }
  }

}
