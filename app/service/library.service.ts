import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Library} from "./model/library";
import {formatLibService} from "./formatLib.service";
import {LibraryLocal} from "../other/library.localservice";
import {updateLibrary} from "./model/updateLibrary";
import {Alert} from "./model/alert";

@Injectable()
export class LibraryService {
  //private dataurl_database = 'http://localhost:8080/pending_db';
  //private dataurl_local = 'http://localhost:8080/pending_local';
  //private dataurl_lib = 'http://localhost:8080/library';

  private dataurl_database = 'http://lcai01.phage.bcgsc.ca:8080/pending_db';
  private dataurl_local = 'http://lcai01.phage.bcgsc.ca:8080/pending_local';
  private dataurl_lib = 'http://lcai01.phage.bcgsc.ca:8080/library';

  //private dataurl_database = 'http://Bioqcdev01.bcgsc.ca:8080/pending_db';
  //private dataurl_local = 'http://Bioqcdev01.bcgsc.ca:8080/pending_local';
  //private dataurl_lib = 'http://Bioqcdev01.bcgsc.ca:8080/library';


  constructor(private http: Http,
              private formatlibservice: formatLibService,
              private librarylocal: LibraryLocal){ }


  getLibraryFromDatabase(): Observable<Library[]> {
    return this.http.get(this.dataurl_database)
               .map(data => this.formatlibservice.formatLibs(data.json()))
               .do(data => this.librarylocal.assign(data))
               .catch(this.handleError);
  }

  getLibraryFromLocal(): Observable<Library[]> {
    return this.http.get(this.dataurl_local)
        .map(data => this.formatlibservice.formatLibs(data.json()))
        .catch(this.handleError);
  }

  getLibById(id: number): Observable<Library>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('libid', id.toString());
    return this.http.get(this.dataurl_lib, {search: params})
               .map(data => this.formatlibservice.formatLib(data.json()))
               .catch(this.handleError);
  }


  updateLibrary(lib: Library, newFiled: updateLibrary): Observable<Library[]> {
    if(!this.doUpdate(lib, newFiled)){
      return null;
    }
    else{
      let body = JSON.stringify( {'id': lib.id,
                                  'status': lib.status,
                                  'addcomments': (this.autoAppend(lib)? ';Manual Review: ':';') + newFiled.addcomments,
                                  'addalerts': this.formatAlerts(lib.alerts, newFiled.addalerts)} );

      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post(this.dataurl_database, body, options)
          .map(data => this.formatlibservice.formatLibs(data.json()))
          .catch(this.handleError);
    }
  }

  private doUpdate(lib: Library, newField: updateLibrary): boolean{
    if(newField.addcomments == null){
      if ( window.confirm("No further comments?") ){
        newField.addcomments = "No further comments";
      }
      else{
        return false;
      }
    }

    if( window.confirm("Status: " + lib.status + "\n" +
                       "Comments: " + newField.addcomments + "\n" +
                       "Alerts: " + this.formatAlerts(null, newField.addalerts) + "\n" +
                       "Confirm ?")){
      return true;
    }
    else {
      return false;
    }
  }

  private autoAppend(lib: Library): boolean{
    if(lib.comments.includes("Manual Review"))
      return false;
    else
      return true;
  }

  private formatAlerts(alerts: string, addalerts: Alert[]): string{
    if(addalerts.length == 0){
      return "";
    }
    else{
      return ( (alerts == null)? "" : ";" ) +
                addalerts[0].alerts_id +
                this.formatAlerts("has", addalerts.slice(1, addalerts.length));
    }
  }

  private handleError(error: any) {
    let errorMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
