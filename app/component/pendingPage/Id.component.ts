import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";
import {Library} from "../../service/model/library";

@Component({
    selector: '[id-field]',
    template: `
                <td align = "center"><span (click) = "onSelect(library.id)">{{library.id}}</span></td>
              `
})

export class IdField{

    @Input('id-field')
    library: Library;

    constructor( private router: Router) { }

  onSelect(idfield: number){
    this.router.navigate(['/review', idfield]);
  }
}
