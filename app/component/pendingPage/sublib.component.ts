import { Component, Input } from '@angular/core';

@Component({
    selector: '[sublib-field]',
    template: `
                <td>{{sublibfield}}</td>
              `
})

export class SublibField{

    @Input('sublib-field')
    sublibfield: string;
}


