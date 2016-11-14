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

  ngOnInit(): void {}
    
  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }
}
