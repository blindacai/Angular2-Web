import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Library} from "../../service/model/library";
import {RestoreService} from "../../service/restore.service";

@Component({
    selector: 'lib-editor',
    template: `
                <div *ngIf = "library">
                    Status: <input [(ngModel)]="library.status"/>
                    Comments: <input [(ngModel)]="library.comments"/>
                
                    <br>
                    <div>
                        <button (click)="onSaved()">save</button>
                        <button (click)="onCanceled()">cancel</button>
                    </div>
                </div>
              `
})

export class LibEditorComponent{
    @Output() canceled = new EventEmitter<Library>();
    @Output() saved = new EventEmitter<Library>();

    @Input()
    set library (lib: Library) {
        this.restoreService.setItem(lib);
    }

    get library () {
        return this.restoreService.getItem();
    }

    constructor(private restoreService: RestoreService<Library>) {}

    onSaved(){
        this.saved.emit(this.restoreService.getItem());
    }

    onCanceled(){
        this.library = this.restoreService.restoreItem();
        this.canceled.emit(this.library);
    }
}
