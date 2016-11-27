import {Component} from '@angular/core';
import {FileContentService} from "../service/fileContent.service";

@Component({
    selector: 'upload-file',
    template: `
                <div class = "container">
                  <h4>Select File: <button (click) = "togglebutton()">{{showtext}}</button></h4>
                  <input type="file" class = "input-lg" (change)="readFile($event)"> 
                           
                  <br>
                  <div *ngIf = "filecontent && show">
                    <div *ngFor = "let content of filecontent">
                      <p>{{content}}</p>
                    </div>
                  </div>
                  
              </div>
              `
})

export class UploadFileComponent{
    filecontent: string[];
    show: boolean = true;
    showtext: string = "Hide Content";

    constructor(private filecontentservice: FileContentService){}

    readFile($event){
        this.filecontentservice.getFileContent($event).subscribe( content => this.filecontent = content )
    }

    togglebutton(){
        if(this.show){
            this.hideContent();
        }
        else this.showContent();
    }

    hideContent(){
        this.show = false;
        this.showtext = "Show Content";
    }

    showContent(){
        this.show = true;
        this.showtext = "Hide Content";
    }
}
