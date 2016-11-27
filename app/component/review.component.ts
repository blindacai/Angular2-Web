import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/model/library";

@Component({
  selector: 'review',
  template: `
                <div *ngIf = "library">
                    <table class = "table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th> <th>lib</th ><th>sublib</th> <th>status</th> <th>comments</th> <th>alerts</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr [pending-lib] = "library" (updatedLibraries) = "updatedLibs($event)"></tr>
                        </tbody>
                    </table>
                </div>
                
                <br>
                
                <button (click) = "backHome()">Back</button>
                
                <br>
                
                <upload-file></upload-file>
                
                <div *ngIf = "library">
                    <file-list [library] = "library"></file-list>
                </div>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  library: Library;

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
    this.libraryservice.getLibById(this.id).subscribe(data => this.library = data);
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService) {}


  backHome(){
    this.router.navigate(['/pending']);
  }
}
