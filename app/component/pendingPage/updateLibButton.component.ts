import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Library} from "../../service/model/library";
import {updateLibrary} from "../../service/model/updateLibrary";
import {LibraryService} from "../../service/library.service";
import {HistoryService} from "../../service/history.service";

@Component({
    selector: '[update-button]',
    template: `
                  <td align = "center">
                      <button type = "submit" 
                              [disabled] = "libtoupdate.status == 'Pending'"
                              (click) = "updateLib(libtoupdate, newfieldvalue)">
                        update
                      </button>
                  
                      <div *ngIf = "errorMsg">
                        {{errorMsg}}
                      </div>
                  </td>
              `
})

export class UpdateButton{
    @Input('update-button')
    libtoupdate: Library;

    @Input()
     newfieldvalue: updateLibrary;

    @Output()
    reviewedLib = new EventEmitter<Library>();

    errorMsg: string;

    constructor(private libraryService: LibraryService,
                private historyService: HistoryService){

    }

    updateLib(libtoupdate: Library, newfieldvalue: updateLibrary){
        this.reviewedLib.emit(libtoupdate);
        /*
        var update = this.libraryService.updateLibrary(libtoupdate);
        if(!update){
            return;
        }
        else{
            update.subscribe( data => {//this.updatedLibs.emit(data);
                    this.reviewedLib.emit(this.libtoupdate);
                    this.historyService.addReviewedLibrary(this.libtoupdate)},
                error => {this.errorMsg = error});
        }
        */
    }
}

