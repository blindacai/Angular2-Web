import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Library} from "../../service/model/library";

@Component({
    selector: '[status-field]',
    template: `
                <td>{{library.status}}
                    <br>
                    <select id = "status" #local_status
                        [(ngModel)]="library.status" name = "status">
                        <option *ngFor = "let s of status" [value] = "s">{{s}}</option>
                    </select>
                </td>
              `
})

export class StatusField{

    @Input('status-field')
    library: Library;

    status = ['Pending', 'Passed', 'Failed'];
}



