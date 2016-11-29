import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {AlertService} from "../../service/alert.service";
import {Subscription} from "rxjs";
import {Alert} from "../../service/model/alert";
import {updateLibrary} from "../../service/model/updateLibrary";
import {Library} from "../../service/model/library";
import {formatAlertService} from "../../service/formatAlerts.service";

@Component({
    selector: '[alerts-field]',
    template: `
                <td>
                    <div *ngIf = "displayAlerts">
                        <div *ngFor = "let r of displayAlerts">{{r.alerts_id}}:{{r.reference}}</div>
                    </div>
                    <br>
                    <addalerts-list [updateLib] = "updateLib"></addalerts-list>
                    <br>
                    <select id = "alerts" #local_alerts name = "alerts"
                        (change) = "onChange(local_alerts.value)">
                        <option *ngFor = "let r of alerts" [value] = "processAlert(r)">
                            {{r.alerts_id}}: {{r.reference}}
                        </option>
                    </select>
                </td>
              `,
    styles: [`select {
                    width:500px;
               }`]
})

export class AlertsField implements OnInit, OnDestroy{
    subscription: Subscription;

    @Input('alerts-field')
    library: Library;

    @Input()
    updateLib: updateLibrary;

    alerts: Alert[] = [];
    displayAlerts: Alert[] = [];

    constructor(private alertService: AlertService,
                private formatalerts: formatAlertService){}

    ngOnInit(){
        this.getAlerts();
    }

    getAlerts(){
        this.subscription = this.alertService.getAlert()
            .subscribe(allalerts => {this.alerts = allalerts;
                                     this.alerts.push({alerts_id: '-1', reference: "not choosing"});
                                     this.displayAlerts = this.formatalerts.lookupAlerts(this.library.alerts, allalerts);});
    }

    onChange(selected: string){
        let alert = this.lookup(selected.split(":")[0]);

        if(alert.alerts_id == "-1"){
            this.updateLib.addalerts = [];
        }
        else if(! (this.checkDuplicateold(alert) || this.checkDuplicatenew(alert)) ){
            this.updateLib.addalerts.push(alert);
        }
    }

    private lookup(selected: string): Alert{
        for(let r of this.alerts){
            if(r.alerts_id == selected){
                return r;
            }
        }
    }

    private checkDuplicatenew(alert: Alert): boolean{
        for(let r of this.updateLib.addalerts){
            if(r.alerts_id == alert.alerts_id){
                return true;
            }
        }
        return false;
    }

    private checkDuplicateold(alert: Alert): boolean{
        if(this.library.alerts != null){
            return this.library.alerts.includes(alert.alerts_id);
        }
        else return false;
    }

    processAlert(r: Alert): string{
        return r.alerts_id + ":" + r.reference;
    }

    ngOnDestroy(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
