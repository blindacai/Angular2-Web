import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';

@Directive({
    selector: '[theHighlight]'
})

export class HighlightDirective implements OnChanges{
    @Input('theHighlight')
    status: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnChanges(){
        if(this.status == 'Passed')
            this.highlight('lightgreen');
        else if(this.status == 'Failed')
            this.highlight('lightsalmon');
        else if(this.status == 'Pending')
            this.highlight('white');
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
