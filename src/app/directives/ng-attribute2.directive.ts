import { Directive , ElementRef , Renderer2} from '@angular/core';

@Directive({
    selector : '[appNgAttribute2]'
})

export class NgAttribute2Directive  {

      constructor(private elem : ElementRef , private renderer : Renderer2)  { 
          setTimeout(() => {
              let text = this.elem.nativeElement;
              let letters = text.innerText.split('');
              let container = this.renderer.createElement('div');
              for(let i = 0 ; i < letters.length ; i++) {
                  let span = this.renderer.createElement('span');
                  let newText = this.renderer.createText(letters[i]);
                  this.renderer.appendChild(span,newText);
                  this.renderer.appendChild(container,span);
                  if (letters[i].match(/^[A-Z]*$/)) {
                      text.innerText = '';
                      span.style.color = 'yellow';
                      this.renderer.appendChild(text,container);
                  }
              }
          },0);
      }

}
