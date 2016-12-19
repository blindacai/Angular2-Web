import {Alert} from "./model/alert";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import {PathSetting} from "../path";

@Injectable()
export class AlertService{

    private alerts_url = PathSetting.PathToBackend + '/alerts';

    constructor(private http: Http){}

    getAlert(): Observable<Alert[]>{
        return this.http.get(this.alerts_url)
                   .map(data => data.json());
    }
}
