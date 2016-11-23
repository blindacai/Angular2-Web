import { Component, Input } from '@angular/core';
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
    selector: '[comments-field]',
    template: `
                <td>{{commentsfield}} {{updateLib.addcomments}}
                     <br>
                     <textarea type = "text" id = "comments" style = "width: 200px; height: 70px"
                            [(ngModel)]="updateLib.addcomments" name = "comments">
                     </textarea>
                </td>
              `
})

export class CommentsField{

    @Input('comments-field')
    commentsfield: string;

    @Input()
    updateLib: updateLibrary;
}


