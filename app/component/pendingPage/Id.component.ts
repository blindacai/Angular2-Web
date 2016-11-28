import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Library} from "../../service/model/library";

@Component({
    moduleId: module.id,
    selector: '[id-field]',
    template: `
                <td align = "center"><span (click) = "onSelect(library.id)">
                                            <p [theHighlight] = "color">{{library.id}}</p>
                                     </span>
                </td>
              `
})

export class IdField implements OnInit{

    @Input('id-field')
    library: Library;

    color: string;

    constructor( private router: Router) { }

    ngOnInit(){
        this.changeColor();
    }

  onSelect(idfield: number){
    this.router.navigate(['/review', idfield]);
  }

  changeColor(){
      let status = this.library.status;
      if(status == 'Pending')
          this.color = "white";
      else if(status == 'Passed')
          this.color = "green";
      else if(status == 'Failed')
          this.color = "red";
  }
}
