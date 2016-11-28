import {Injectable} from "@angular/core";
import {theFile} from "./model/file";

@Injectable()
export class formatFileService{
    files: theFile[] = [];

    formatFiles(files: any[]): theFile[]{
        this.files = [];
        for(let file of files){
            this.files.push(this.formatFile(file));
        }
        return this.files;
    }

    formatFile(singlefile: string): theFile{
        let file: theFile = {
                            name : singlefile,
                            content: null,
                            show: false,
                            extension: false
                            };
        return file;
    }
}
