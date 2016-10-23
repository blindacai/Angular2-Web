/**
 * Created by linda on 2016-10-09.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";
import {HistoryService} from "../../service/history.service";
import {Observable} from "rxjs";

@Component({
  selector: 'library-form',
  template: `
              <form (ngSubmit) = update() #libform = "ngForm">
                <div>
                
                  <select id = "status"
                          [(ngModel)]="library.status" name = "status">
                    <option *ngFor = "let s of status" [value] = "s">{{s}}</option>
                  </select>
                  
                  <input type = "text" id = "comments"
                         [(ngModel)]="library.addcomments" name = "comments">
                  
                  <button type = "submit">update</button>
                  
                  <div *ngIf = "errorMsg">
                    {{errorMsg}}
                  </div>
                  
                </div>
              </form>
            `
})

export class LibraryFormComponent{
  status = ['Pending', 'Passed', 'Failed'];
  errorMsg: string;

  @Input()
  library: Library;

  @Output()
  updatedLibs = new EventEmitter<Library[]>();

  @Output()
  reviewedLib = new EventEmitter<Library>();

  constructor(private libraryService: LibraryService,
              private historyService: HistoryService){}

  update(){
    var update = this.libraryService.updateLibrary(this.library);
    if(!update){
      return;
    }
    else{
      update.subscribe( data => {this.updatedLibs.emit(data);
                                 this.reviewedLib.emit(this.library);
                                 this.historyService.addReviewedLibrary(this.library)},
                        error => {this.errorMsg = error});
    }
  }
}
