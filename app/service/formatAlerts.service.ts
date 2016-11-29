import {Injectable, Input, OnInit, OnDestroy} from "@angular/core";
import {Alert} from "./model/alert";
import {AlertService} from "./alert.service";
import {Subscription} from "rxjs";
import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class formatAlertService{
    @Input()
    alerts: string;

    alertTable: Alert[] = [];
    formattedAlerts: Alert[] = [];

    private alertSource = new Subject<Alert[]>();
    alertSource$ = this.alertSource.asObservable();

    subscription: Subscription;

    constructor(private alertService: AlertService){
        this.getAlerts();
    }

    getAlerts(){
        this.subscription = this.alertService.getAlert()
            .subscribe(allalerts => {this.alertTable = allalerts; console.log(this.alertTable)});
    }

    lookupAlerts(alerts: string): Observable<Alert[]>{
        console.log(alerts);
        if(!alerts)
            return null;
        else{
            let allalerts: string[] = alerts.split(";");
            for(let alert of allalerts){
                this.lookupAlert(alert);
            }
            console.log(this.alertTable);
            this.alertSource.next(this.formattedAlerts);
            return this.alertSource$;
        }
    }

    lookupAlert(alert: string){
        //console.log(this.alertTable[0]);
        for(let r of this.alertTable){
            if(alert === r.alerts_id){
                console.log("in if");
                this.formattedAlerts.push(r);
            }
        }
    }
}
