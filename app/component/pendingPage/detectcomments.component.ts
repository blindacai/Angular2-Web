import { Component, Input, DoCheck } from '@angular/core';
import {LibraryService} from "../../service/library.service";

@Component({
    selector: 'detect-comments',
    template: `
                <span [change-color] = "msg">{{msg}}</span>
              `
    //styles: [`span{ color: red; }`]
})

export class DetectCommentsComponent implements DoCheck{
    msg: string;

    constructor(private libraryService: LibraryService){}

    @Input()
    id: number;

    @Input()
    addcomments: string;

    oldaddcomments: string = null;

    ngDoCheck() {
        if(this.addcomments !== this.oldaddcomments){
            this.oldaddcomments = this.addcomments;
            this.firechanges();
        }
    }

    firechanges(){
    this.libraryService.testUpdate(this.id, "linda")
                       .subscribe(data => {console.log(data.message); this.msg = data.message});
    }


}
