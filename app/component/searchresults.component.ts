import { Component, Input } from '@angular/core';
import {Library} from "../service/model/library";

@Component({
    selector: 'search-results',
    template: `
                <div *ngIf = "library">
                    <table class = "table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th> <th>lib</th ><th>sublib</th> <th>lims protocol</th> <th>status</th> <th>comments</th> <th>alerts</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr [pending-lib] = "library"></tr>
                        </tbody>
                    </table>
                </div>
              `
})

export class SearchResultsComponent{
    @Input()
    library: Library;
}
