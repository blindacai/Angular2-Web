import { Component } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";

@Component({
    selector: 'search-db',
    template: `
                <div>
                    <span></span>
                    <input #searchbox
                     (keyup.enter) = "searchdb(searchbox.value); searchbox.value = ''">
                    <button (click) = "searchdb(searchbox.value); searchbox.value = ''">Search</button>
                    <span>by sublib</span>
                </div>
                <br>
                <div *ngIf = "libraries">
                   <search-results [libraries] = "libraries"></search-results>
                </div>
              `,
    styles: [`span {
                    display: inline-block;
                    width:40%;
                    outline: 0px dashed white;
            }`]
})

export class SearchDBComponent{
    libraries: Library[];

    constructor(private libservice: LibraryService){}

    searchdb(libinfo: string){
        this.libraries = null;
        //this.libservice.getLibById(parseInt(libinfo)).subscribe(lib => this.library = lib);
        this.libservice.getLibBySublib(libinfo).subscribe(libs => {this.libraries = libs});
    }
}
