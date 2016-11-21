import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {Library} from "../../service/model/library";
import {LibraryService} from "../../service/library.service";
import {Router} from "@angular/router";

@Component({
  selector: '[lib-list]',
  template: `
              <td><span (click) = "onSelect(library)">{{library.id}}</span></td>
              <td>{{library.lib}}</td>
              <td>{{library.sublib}}</td>

              <td>{{library.status}}</td>
              <td>{{library.comments}}</td>
              <td>{{library.addcomments}}</td>
              <td>{{library.alerts}}</td>
              <td>{{library.addalerts}}</td>
              
              <!-- <button (click) = "updateLibrary(lib, 'add something')">Update</button> -->
              <!--<router-outlet></router-outlet>-->
              
              `,
})

export class PendingLibraryComponent implements OnInit{

  @Input('lib-list')
  library: any;

  ngOnInit(): void {}
    
  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }
}
