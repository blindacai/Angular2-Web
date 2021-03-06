import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {Router} from "@angular/router";
import {Library} from "../../service/model/library";

@Component({
    moduleId: module.id,
    selector: '[id-field]',
    template: `
                <td align = "center"><span (click) = "onSelect(library.id)">
                                            <p [theHighlight] = "library.status">{{library.id}}</p>
                                     </span>
                
                <br>
                <button (click) = "gotoDetails()">Details</button>
                </td>
              `
})

export class IdField{

    @Input('id-field')
    library: Library;

    constructor( private router: Router) { }

  onSelect(idfield: number){
    this.router.navigate(['/review', idfield]);
  }

    gotoDetails(){
        window.location.href='http://bioqcweb02.bcgsc.ca/web/?queriedLib=' + this.library.id + '&pipeline=bbt';
    }

}
