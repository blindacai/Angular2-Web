import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: '[id-field]',
    template: `
                <td align = "center"><span (click) = "onSelect(idfield)">{{idfield}}</span></td>
              `
})

export class IdField{

    @Input('id-field')
    idfield: number;

    constructor( private router: Router) { }

  onSelect(idfield: number){
    this.router.navigate(['/review', idfield]);
  }
}
