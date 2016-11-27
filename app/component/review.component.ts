import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/model/library";
import {FileContentService} from "../service/fileContent.service";
import {AlertService} from "../service/alert.service";
import {Alert} from "../service/model/alert";
import {Subscription} from "rxjs";

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
                
                
                
              <!--
              <h3>this is a review page for {{id}}</h3>
              <div *ngIf = "lib">
                  <lib-list [library] = lib></lib-list>
              
                  <library-form [library] = lib
                                [alerts] = alerts>
                  </library-form>
              </div>
              
              <div>
                  Select File:
                  <input type="file" (change)="readFile($event)">
                  <br>
                  
                  <div *ngIf = "fileList">
                    <div *ngFor = "let file of fileList">
                      <span (click) = "getContent(file)">{{file}}</span>  
                    </div>
                  </div>
                  
                  <br>
                  File Content of {{selected}}:
                  <div *ngIf = "filecontent">
                    <div *ngFor = "let content of filecontent">
                      <p>{{content}}</p>
                    </div>
                  </div>

              </div>

              <br>
              <button (click) = "openurl('txt_one')">open url</button>
              <br>
              <br>

              <button (click) = "backHome()">Back</button>
              -->
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  library: Library;

  fileList: string[] = [];
  filecontent: string[] = [];

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));
    this.libraryservice.getLibById(this.id).subscribe(data => this.library = data);

    //this.filecontentservice.getFileList(this.library).subscribe(data => this.fileList = data);

  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService,
              private filecontentservice: FileContentService) {}



  readFile($event){
    this.filecontentservice.getFileContent($event).subscribe( content => this.filecontent = content )
  }

  getContent(filename: string){
    this.filecontentservice.getFromFileSystem(filename).subscribe( content => {this.filecontent = content;} );
  }

  backHome(){
    this.router.navigate(['/pending']);
  }

  /*
  id: number;
  lib: Library = null;
  selected: string;

  fileList: string[] = [];
  filecontent: string[] = [];
  alerts: Alert[] = [];

  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private libraryservice: LibraryService,
              private filecontentservice: FileContentService,
              private alertService: AlertService) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]));

    this.libraryservice.getLibById(this.id).subscribe(data => this.lib = data);   //console.log(this.lib); // is null; async
    this.filecontentservice.getFileList().subscribe(data => this.fileList = data);
    this.getAlerts()
  }


  getAlerts(){
    this.subscription = this.alertService.getAlert()
        .subscribe(allalerts => {this.alerts = allalerts;
          this.alerts.push({alerts_id: '', reference: "not choosing"});});
  }


  readFile($event){
    this.filecontentservice.getFileContent($event).subscribe( content => this.filecontent = content )
  }

  getContent(filename: string){
      this.selected = filename;
      this.filecontentservice.getFromFileSystem(filename).subscribe( content => {this.filecontent = content;} );
  }

  backHome(){
    this.router.navigate(['/pending']);
  }
  */
}
