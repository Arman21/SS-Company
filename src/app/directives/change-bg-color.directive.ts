import { Directive , ElementRef} from '@angular/core';

@Directive({
    selector  : '[appChangeBgColor]'
})

export class ChangeBgColorDirective  {

    constructor(private elem : ElementRef)  { 
        this.elem.nativeElement.style.backgroundColor = 'rgb(141,228,241)';
    }

}
