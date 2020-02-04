import { Directive , ElementRef} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'Red';
  }

}
