import { Directive , ElementRef , Renderer2 } from '@angular/core';

@Directive({
    selector  : '[appNgAttributes]'
})

export class NgAttributesDirective  {

    constructor(private elem : ElementRef , private renderer : Renderer2) { 
        setTimeout(() => {
            let text = this.elem.nativeElement;
            let words = text.innerText.split(' ');
            let container = this.renderer.createElement('div');
            for(let i = 0 ; i < words.length ; i++) {
                let span = this.renderer.createElement('span');
                let newText = this.renderer.createText(words[i] + ' ');
                this.renderer.appendChild(span,newText);
                this.renderer.appendChild(container,span);
                if (words[i][0] == words[i][0].toUpperCase()) {
                    span.style.backgroundColor = 'rgb(147,241,155)';
                    text.innerText = '';
                    this.renderer.appendChild(text,container);
                }
            }
        },0);
    }

}
