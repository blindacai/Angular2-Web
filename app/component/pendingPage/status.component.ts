import { Component, Input } from '@angular/core';

@Component({
    selector: '[status-field]',
    template: `
                <td>{{statusfield}}</td>
              `
})

export class StatusField{

    @Input('status-field')
    statusfield: string;
}



