import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {Library} from "../../service/model/library";
import {LibraryService} from "../../service/library.service";
import {Router} from "@angular/router";

@Component({
  selector: '[pending-lib]',
  template: `
              <td [id-field] = "library.id"></td>
              <td [lib-field] = "library.lib"></td>
              <td [sublib-field] = "library.sublib"></td>
              <td [status-field] = "library.status"></td>
              <td [comments-field] = "library.comments"></td>
              <td>{{library.addcomments}}</td>
              <td>{{library.alerts}}</td>
              <td>{{library.addalerts}}</td>
              
              <router-outlet></router-outlet>
              
              `,
})

export class PendingLibraryComponent implements OnInit{

  @Input('pending-lib')
  library: any;

  status = ['Pending', 'Passed', 'Failed'];

  ngOnInit(): void {}
    
  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }
}
