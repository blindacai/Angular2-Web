import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";

@Component({
    selector: 'edit-lib',
    template: `
                <div *ngIf = "library">
                 {{library.id}}
                 {{library.sublib}}
                 
                 <div [hidden] = "editing">
                    {{library.status}}
                    {{library.comments}}
                 </div>
                 
                 <button
                    [hidden]="editing"
                    (click)="editing = true">
                      edit
                 </button>
                 
                 <lib-editor [hidden] = "!editing" 
                             [library] = "library"
                             (saved)= "onSaved($event)"
                             (canceled) = "onCanceled()">
                 </lib-editor>
                </div>
              `
})

export class EditLibComponent implements OnInit{
    id: number;
    library: Library;

    editing = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private libraryservice: LibraryService) {}

    ngOnInit(){
        this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
        this.libraryservice.getLibById(this.id).subscribe(data => this.library = data);
    }

    onSaved(updatedLib: Library){
        this.library = updatedLib;
        this.editing = false;
    }

    onCanceled(){
        this.editing = false;
    }

}
