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
                              [disabled] = "libtoupdate.status == 'Passed'"
                              (click) = "updateLib(libtoupdate, newfieldvalue)">
                        update
                      </button>
                      
                      <button (click) = "test()">
                        Test
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

    @Output()
    updatedLibs = new EventEmitter<Library[]>();

    errorMsg: string;

    constructor(private libraryService: LibraryService,
                private historyService: HistoryService){

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

    test(){
        this.libraryService.testUpdate(this.libtoupdate.id).subscribe(data => {console.log(data.message);});
    }

}

