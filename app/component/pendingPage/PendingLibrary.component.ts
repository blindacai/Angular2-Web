import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-list',
  template: `
              <span (click) = "onSelect(library)">{{library.id}}</span> 
              &nbsp;
              {{library.lib}} &nbsp; {{library.sublib}} &nbsp; {{library.status}} &nbsp; {{library.comments}} &nbsp; {{library.addcomments}}
              &nbsp;
              
              <br>
              <!-- <button (click) = "updateLibrary(lib, 'add something')">Update</button> -->
              <router-outlet></router-outlet>
              `,
})

export class PendingLibraryComponent implements OnInit{

  @Input()
  library: any;

  //library: Library;

  ngOnInit(): void {
    //this.library = new Library(this.inputlibrary.id, this.inputlibrary.library_id, this.inputlibrary.status.qc0_status, this.inputlibrary.status.qc_comments, this.inputlibrary.addcomments);
  }

  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }

  /*
  updateLibrary(lib: Library, comments: string){
    this.libraryService.updateLibrary(lib.id, comments).subscribe(data => this.libraries = data);
  }
  */
}
