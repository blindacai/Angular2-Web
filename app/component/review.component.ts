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
              
                  <library-form [library] = lib >
                  </library-form>
              </div>
              
              <div>
                  Select File:
                  <input type="file" (change)="changeListener($event)">
                  <p>{{filecontent}}</p>

              </div>
              
              <button (click) = "backHome()">Back</button>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  lib: Library = null;
  filecontent: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
    this.libraryservice.getLibById(this.id).subscribe(data => this.lib = data);
    //console.log(this.lib); // is null; asyn

    
  }

  // $event.target === <input type="file"
  changeListener($event) : void {
    this.readFile($event.target);
  }

  readFile(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (ev) => { this.filecontent = myReader.result };
    myReader.readAsText(file);
  }


  backHome(){
    this.router.navigate(['/pending']);
  }
}
