import { Component } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";

@Component({
    selector: 'search-db',
    template: `
                <div>
                    <span></span>
                    <input #searchbox
                      >
                    <button (click) = "searchdbBylib(searchbox.value); searchbox.value = ''">Search By lib and sublib</button>
                    <button (click) = "searchdbByid(searchbox.value); searchbox.value = ''">Search By id</button>
                </div>
                
                <br>
                <div *ngIf = "message">
                    <span></span>{{message}}
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
    message: string;

    constructor(private libservice: LibraryService){}

    searchdbBylib(libinfo: string){
        this.libraries = null;
        this.libservice.getLibBySublib(libinfo).subscribe(libs => {this.libraries = libs; this.message = null},
                                                          error => this.message = "Not Found");
    }

    searchdbByid(id: string){
        this.libraries = null;
        this.libservice.getLibById(parseInt(id)).subscribe(lib => {this.libraries = []; this.libraries.push(lib); this.message = null},
                                                           error => this.message = "Not Found");
    }
}
