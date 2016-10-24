import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../service/library.service";

@Component({
  selector: 'review',
  template: `
            <h3>this is a review page for {{id}}</h3>
            <!--
            <lib-list [library] = lib></lib-list>
            -->
            <button (click) = "backHome()">Back</button>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]))
    this.libraryservice.getLibById(this.id).subscribe(data => {});
  }

  backHome(){
    this.router.navigate(['/pending']);
  }
}
