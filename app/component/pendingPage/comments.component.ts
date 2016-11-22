import { Component, Input } from '@angular/core';

@Component({
    selector: '[comments-field]',
    template: `
                <td>{{commentsfield}}</td>
              `
})

export class CommentsField{

    @Input('comments-field')
    commentsfield: string;
}


