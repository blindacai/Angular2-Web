import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';

@Directive({
    selector: '[change-color]'
})

export class ChangeColor implements OnChanges{
    @Input('change-color')
    message: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnChanges(){
        if(this.message == 'I am editing')
            this.changeColor('green');
        else if(this.message == 'This lib is being edited by someone')
            this.changeColor('red');
        else this.changeColor('white');
    }

    private changeColor(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
}

