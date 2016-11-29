import { Component, Input } from '@angular/core';

@Component({
    selector: '[limsprotocol-field]',
    template: `
                <td>{{limsprotocolfield}}</td>
              `
})

export class LimsprotocolField{

    @Input('limsprotocol-field')
    limsprotocolfield: string;
}


