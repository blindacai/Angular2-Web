import {Component, OnInit, Input} from '@angular/core';
import {theFile} from "../../service/model/file";
import {FileContentService} from "../../service/fileContent.service";

@Component({
    selector: 'file-content',
    template: `
                <div *ngIf = "file.content" class="card card-block">
                    <div *ngFor = "let content of file.content">
                        <p>{{content}}</p>
                    </div>
                </div>
              `,
    styles: [`p {
                   font-family: monospace;
               }`]
})

export class FileContentComponent implements OnInit{
    @Input()
    file: theFile;

    constructor(private filecontentservice: FileContentService){}

    ngOnInit(){
        this.filecontentservice.getFromFileSystem(this.file.name).subscribe(content => this.file.content = content);
    }
}
