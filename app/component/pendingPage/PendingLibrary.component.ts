import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {Library} from "../../service/model/library";
import {LibraryService} from "../../service/library.service";
import {Router} from "@angular/router";
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
  selector: '[pending-lib]',
  template: `
              <td [id-field] = "library"></td>
              <td [lib-field] = "library.lib"></td>
              <td [sublib-field] = "library.sublib"></td>
              <td [status-field] = "library"></td>
              <td [comments-field] = "library.comments" [updateLib] = "updateLib"></td>
              <td [alerts-field] = "library.alerts" [updateLib] = "updateLib"></td>
              
              <td align = "center" [update-button] = "library" [newfieldvalue] = "updateLib"></td>

              <router-outlet></router-outlet>
              `,
})

export class PendingLibraryComponent implements OnInit{

  @Input('pending-lib')
  library: Library;

  updateLib: updateLibrary = {
    addcomments: null,
    addalerts: []
  };

  constructor(
      private libraryService: LibraryService,
      private router: Router) { }

  ngOnInit(){}

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }
}
