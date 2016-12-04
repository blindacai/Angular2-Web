import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";
import {Library} from "../../service/model/library";

@Component({
    selector: '[return-lib]',
    template: `
              <td>{{library.id}}</td>
              <td>{{library.lib}}</td>
              <td>{{library.sublib}}</td>
              <td>{{library.limsprotocol}}</td>
              <td>{{library.status}}</td>
              <td>{{library.comments}}</td>
              <td>{{library.alerts}}</td>
              <td><button (click) = "edit()">Edit</button></td>
              `
})

export class ReturnedLibComponent{
    @Input('return-lib')
    library: Library;

    constructor( private router: Router) { }

    edit(){
        this.router.navigate(['/edit', this.library.id]);
    }
}
