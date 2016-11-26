import {Component, OnInit, Input} from '@angular/core';
import {FileContentService} from "../service/fileContent.service";
import {Library} from "../service/model/library";

@Component({
    selector: 'file-list',
    template: `
                <div *ngIf = "fileList">
                    <div class="container">
                      <h3>All files in directory</h3>
                      <div class="list-group" *ngFor = "let file of fileList">
                        <div class="list-group-item">{{file}}</div>
                      </div>
                    </div>
                </div>
                
                <!--
                  <div *ngIf = "fileList">
                    <div *ngFor = "let file of fileList">
                      {{file}}
                    </div>
                  </div>
                -->
              `
})

export class FileListComponent implements OnInit{

    @Input()
    library: Library;

    fileList: string[];

    ngOnInit(){
        this.filecontentservice.getFileList(this.library).subscribe(data => this.fileList = data);
    }

    constructor(private filecontentservice: FileContentService) {}

}
