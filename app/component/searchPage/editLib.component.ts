import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";

@Component({
    selector: 'edit-lib',
    template: `
                edit page
              `
})

export class EditLibComponent implements OnInit{
    id: number;
    library: Library;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private libraryservice: LibraryService) {}

    ngOnInit(){
        this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
        this.libraryservice.getLibById(this.id).subscribe(data => this.library = data);
    }

}
