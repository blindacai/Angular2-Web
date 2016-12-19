import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
              `,
})

export class UpdateButton implements OnChanges{
    @Input('update-button')
    libtoupdate: Library;

    @Input()
     newfieldvalue: updateLibrary;


    @Output()
    reviewedLib = new EventEmitter<Library>();

    @Output()
    updatedLibs = new EventEmitter<Library[]>();

    errorMsg: string;

    private key: number = 0;

    constructor(private libraryService: LibraryService,
                private historyService: HistoryService){

    }

    ngOnChanges(){
        //console.log("change from lib");
    }

    updateLib(libtoupdate: Library, newfieldvalue: updateLibrary){
        var update = this.libraryService.updateLibrary(libtoupdate, newfieldvalue);
        if(!update){
            return;
        }
        else{
            update.subscribe( data => {
                    this.updatedLibs.emit(data);
                    //this.reviewedLib.emit(this.libtoupdate);
                    this.historyService.addReviewedLibrary( data.filter(this.findLib.bind(this))[0] ); },
                error => {this.errorMsg = error});
        }
    }

    private findLib(data: Library){
        return data.id == this.libtoupdate.id;
    }

}

