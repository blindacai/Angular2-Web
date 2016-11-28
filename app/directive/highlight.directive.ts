import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
    selector: '[theHighlight]'
})

export class HighlightDirective implements OnInit{
    @Input('theHighlight')
    color: string = "red";

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnInit(){
        this.highlight(this.color);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
    }
}
