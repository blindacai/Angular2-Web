import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';

@Directive({
    selector: '[theHighlight]'
})

export class HighlightDirective implements OnChanges{
    @Input('theHighlight')
    color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnChanges(){
        this.highlight(this.color);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
