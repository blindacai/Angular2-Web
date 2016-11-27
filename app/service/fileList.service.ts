import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Library} from "./model/library";
import {formatFileService} from "./formatFile.service";
import {theFile} from "./model/file";

@Injectable()
export class FileListService{
    constructor(private http: Http,
                private formatfileservice: formatFileService){}

    private file_name_path: string = 'http://localhost:8080/filename';
    //private file_name_path: string = 'http://lcai01.phage.bcgsc.ca:8080/filename';

    getFileList(library: Library): Observable<theFile[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('lib', library.lib);
        params.append('library_id', library.library_id);
        params.append('sublib', library.sublib);

        return this.http.get(this.file_name_path, {search: params})
                        .map(names => this.formatfileservice.formatFiles(names.json()));
    }

}