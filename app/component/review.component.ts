import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/model/library";
import {FileContentService} from "../service/fileContent.service";

@Component({
  selector: 'review',
  template: `
              <h3>this is a review page for {{id}}</h3>
              <div *ngIf = "lib">
                  <lib-list [library] = lib></lib-list>
              
                  <library-form [library] = lib >
                  </library-form>
              </div>
              
              <div>
                  Select File:
                  <input type="file" (change)="readFile($event)">

                  <div *ngIf = "filecontent">
                    <div *ngFor = "let content of filecontent">
                      <p>{{content}}</p>
                    </div>
                  </div>

              </div>
              
              <button (click) = "backHome()">Back</button>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  lib: Library = null;

  filecontent: string[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService,
              private filecontentservice: FileContentService) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
    this.libraryservice.getLibById(this.id).subscribe(data => this.lib = data);
    //console.log(this.lib); // is null; async
  }

  readFile($event){
    this.filecontentservice.getFileContent($event).subscribe( content => this.filecontent = content )
  }

  backHome(){
    this.router.navigate(['/pending']);
  }
}
