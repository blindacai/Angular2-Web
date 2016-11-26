import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Http, Response, URLSearchParams} from '@angular/http';
import {LibField} from "../component/pendingPage/lib.component";
import {Library} from "./model/library";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FileContentService{

    constructor(private http: Http){}

    filecontent: string[] = [];
    private contentSource = new Subject<string[]>();
    contentSource$ = this.contentSource.asObservable();

    contentTwo: string[] = [];

    private file_path: string = 'http://lcai01.phage.bcgsc.ca:8080/filecontent';
    private file_name_path: string = 'http://lcai01.phage.bcgsc.ca:8080/filename';

    //private file_path: string = 'http://Bioqcdev01.bcgsc.ca:8080/filecontent';
    //private file_name_path: string = 'http://Bioqcdev01.bcgsc.ca:8080/filename';

    // $event.target === <input type="file"
    getFileContent($event): Observable<string[]>{
        var tag = $event.target;
        var file = tag.files[0];
        var fileType = /text.*/;

        if(file == null){
            this.filecontent = [];
            this.contentSource.next(this.filecontent);
            return this.contentSource$;
        }

        if(file.type.match(fileType)){
            var myReader: FileReader = new FileReader();
            myReader.onloadend = (ev) => { this.filecontent = myReader.result.split(/\r\n|\r|\n/g); this.contentSource.next(this.filecontent);};
            myReader.readAsText(file);
        }
        else this.filecontent = ["File not supported"];

        this.contentSource.next(this.filecontent);
        return this.contentSource$;
    }

    getFromFileSystem(filename: string): Observable<string[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('filename', filename);
        params.set('extension', filename);
        return this.http.get(this.file_path, {search: params})
                        .map(data => data.json());
    }

    getFileList(library: Library): Observable<string[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('lib', library.lib);
        params.append('library_id', library.library_id);
        params.append('sublib', library.sublib);

        return this.http.get(this.file_name_path, {search: params}).map(names => names.json());
    }
}