import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Library} from "./library";
import {formatLibService} from "./formatLib.service";

@Injectable()
export class LibraryService {

  //private dataurl = 'http://localhost:4000/data';
  private dataurl_database = 'http://localhost:8080/pending_db';
  private dataurl_local = 'http://localhost:8080/pending_local';

  constructor(private http: Http, private formatlibservice: formatLibService){ }

// change the return type from Library[] to any[] database structure and Library.ts is not the same
// to get the status from database: lib.status.qc0_status, while from Library.ts: lib.status
  getLibraryFromDatabase(): Observable<Library[]> {
    return this.http.get(this.dataurl_database)
               .map(data => this.formatlibservice.format(data.json()))
               .catch(this.handleError);
  }
  
  getLibraryFromLocal(): Observable<Library[]> {
    return this.http.get(this.dataurl_local)
      .map(data => this.formatlibservice.format(data.json()))
      .catch(this.handleError);
  }

  //id:number, status: string, addcomments: string

  updateLibrary(lib: Library): Observable<Library[]> {
    if(!this.doUpdate(lib)){
      return null;
    }
    else{
      let body = JSON.stringify( {'id': lib.id,
                                  'status': lib.status,
                                  'addcomments': (this.autoAppend(lib)? ';Manual Review: ':';') + lib.addcomments} );

      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post(this.dataurl_database, body, options)
          .map(data => this.formatlibservice.format(data.json()))
          .catch(this.handleError);
    }
  }

  private doUpdate(lib: Library): boolean{
    if(lib.addcomments == null){
      if ( window.confirm("No further comments?") ){
        lib.addcomments = "No further comments";
        return true;
      }
    }
    else{
      if( window.confirm("Status: " + lib.status + ";" + "Comments: " + lib.addcomments + "?") ){
        return true;
      }
    }
    return false;
  }

  private autoAppend(lib: Library): boolean{
    if(lib.comments.includes("Manual Review"))
      return false;
    else
      return true;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure...
    let errorMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
