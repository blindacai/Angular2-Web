import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/library";

@Component({
  selector: 'review',
  template: `
            <h3>this is a review page for {{id}}</h3>
            <div *ngIf = "lib">
                <lib-list [library] = lib></lib-list>
                
                <library-form 
                [library] = lib >
                </library-form>
            </div>
            
            <button (click) = "backHome()">Back</button>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  lib: Library = null;
  count: number = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService) {}

  ngOnInit(){
    this.count++;
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
    this.libraryservice.getLibById(this.id).subscribe(data => this.lib = data);
    //console.log(this.lib); // is null; asyn
  }

  backHome(){
    this.router.navigate(['/pending']);
  }
}
