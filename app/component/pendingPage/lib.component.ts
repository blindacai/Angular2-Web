import { Component, Input } from '@angular/core';

@Component({
    selector: '[lib-field]',
    template: `
                <td>{{libfield}}</td>
              `
})

export class LibField{

    @Input('lib-field')
    libfield: string;
}

