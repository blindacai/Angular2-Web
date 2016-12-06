import { Component, Input } from '@angular/core';
import {updateLibrary} from "../../service/model/updateLibrary";
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";

@Component({
    selector: '[comments-field]',
    template: `
                <td>{{library.comments}} <span style = "color: blue">{{updateLib.addcomments}}</span>
                     <br>
                     <textarea type = "text" id = "comments" style = "width: 200px; height: 70px"
                            [(ngModel)]="updateLib.addcomments" name = "comments">
                     </textarea>
                     
                     <br>
                     <detect-comments [addcomments] = "updateLib.addcomments"
                                      [id] = "library.id"></detect-comments>
                </td>
              `
})

export class CommentsField{

    @Input('comments-field')
    library: Library;

    @Input()
    updateLib: updateLibrary;
}


