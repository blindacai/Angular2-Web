import {Alert} from "./model/alert";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class AlertService{

    //private alerts_url = 'http://localhost:4000/alerts';
    private alerts_url = 'http://lcai01.phage.bcgsc.ca:8080/alerts';
    //private alerts_url = 'http://Bioqcdev01.bcgsc.ca:8080/alerts';

    constructor(private http: Http){ }

    getAlert(): Observable<Alert[]>{
        return this.http.get(this.alerts_url)
                   .map(data => data.json());
    }
}
