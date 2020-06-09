import { Directive , ElementRef , HostListener , Input } from '@angular/core';

@Directive({
    selector : '[appChangeColor]'
})

export class ChangeColorDirective  {

    @Input() public newBg2 : string;

    constructor(private elem : ElementRef) { 
        this.elem.nativeElement.style.backgroundColor = 'rgb(57,175,194)';
    }

    @HostListener('mouseover') onMouseOver() {
        this.newBg('rgb(114,234,124)');
    }

    @HostListener('mouseout') onMouseOut() {
        this.newBg(this.newBg2);
    }

    private newBg(color : string) {
        this.elem.nativeElement.style.backgroundColor = color;
    }
}
