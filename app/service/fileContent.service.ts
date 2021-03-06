import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Http, URLSearchParams} from '@angular/http';
import {PathSetting} from "../path";

@Injectable()
export class FileContentService{

    constructor(private http: Http){}

    filecontent: string[] = [];
    private contentSource = new Subject<string[]>();
    contentSource$ = this.contentSource.asObservable();

    private file_path: string = PathSetting.PathToBackend + '/filecontent';


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
        return this.http.get(this.file_path, {search: params})
                        .map(data => data.json());
    }

}