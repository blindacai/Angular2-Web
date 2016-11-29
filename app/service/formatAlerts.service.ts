import {Injectable} from "@angular/core";
import {Alert} from "./model/alert";

@Injectable()
export class formatAlertService{

    alertTable: Alert[] = [];
    formattedAlerts: Alert[] = [];

    constructor(){}

    lookupAlerts(alerts: string, alertsTable: Alert[]): Alert[]{
        this.formattedAlerts = [];
        this.alertTable = alertsTable;
        if(!alerts)
            return null;
        else{
            let allalerts: string[] = alerts.split(";");
            for(let alert of allalerts){
                this.lookupAlert(alert);
            }
            return this.formattedAlerts;
        }
    }

    lookupAlert(alert: string){
        for(let r of this.alertTable){
            if(alert === r.alerts_id){
                this.formattedAlerts.push(r);
            }
        }
    }
}
