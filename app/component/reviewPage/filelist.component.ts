import {Component, OnInit, Input} from '@angular/core';
import {FileContentService} from "../../service/fileContent.service";
import {Library} from "../../service/model/library";
import {theFile} from "../../service/model/file";
import {FileListService} from "../../service/fileList.service";

@Component({
    selector: 'file-list',
    template: `
                <div *ngIf = "fileList">
                    <div class="container">
                      <h3>All files in directory</h3>
                      <div class="list-group" *ngFor = "let file of fileList">
                        <div class="list-group-item" (click) = "file.show = !file.show">
                            {{file.name}}
                            <span class="badge" *ngIf = "!file.extension">Not Supported</span>
                            
                            <div *ngIf = "file.show && file.extension">
                                <file-content [file] = "file"></file-content>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
              `
})

export class FileListComponent implements OnInit{

    @Input()
    library: Library;

    fileList: theFile[];

    ngOnInit(){
        this.filelistservice.getFileList(this.library).subscribe(data => this.fileList = data);
    }

    constructor(private filelistservice: FileListService) {}

}
