import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Library} from "../../service/model/library";

@Component({
    selector: '[status-field]',
    template: `
                <td>{{library.status}}
                    <br>
                    <select id = "status" #local_status
                        (change) = "updatedStatus(local_status.value)"
                        [(ngModel)]="library.status" name = "status">
                        <option *ngFor = "let s of status" [value] = "s">{{s}}</option>
                    </select>
                </td>
              `
})

export class StatusField{

    @Input('status-field')
    library: Library;

    @Output()
    newStatus = new EventEmitter<string>();

    status = ['Pending', 'Passed', 'Failed'];

    updatedStatus(status: string){
        this.newStatus.emit(status);
    }
}



