import { Component } from '@angular/core';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/model/library";

@Component({
    selector: 'search-db',
    template: `
                <div>
                    <input #searchbox
                     (keyup.enter) = "searchdb(searchbox.value); searchbox.value = ''">
                    <button (click) = "searchdb(searchbox.value); searchbox.value = ''">Search</button>
                </div>
                <br>
                <div *ngIf = "library">
                   <search-results [library] = "library"></search-results>
                </div>
              `
})

export class SearchDBComponent{
    library: Library;

    constructor(private libservice: LibraryService){}

    searchdb(libinfo: string){
        this.library = null;
        this.libservice.getLibById(parseInt(libinfo)).subscribe(lib => this.library = lib);
    }
}
