import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {AlertService} from "../../service/alert.service";
import {Subscription} from "rxjs";
import {Alert} from "../../service/model/alert";
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
    selector: '[alerts-field]',
    template: `
                <td>{{alertsField}} <addalerts-list [updateLib] = "updateLib"></addalerts-list>
                    <br>
                    <select id = "alerts" #local_alerts name = "alerts"
                        (change) = "onChange(local_alerts.value)">
                        <option *ngFor = "let r of alerts" [value] = "processAlert(r)">
                            {{r.alerts_id}}: {{r.reference}}
                        </option>
                    </select>
                </td>
              `
})

export class AlertsField implements OnInit, OnDestroy{
    subscription: Subscription;

    @ Input('alerts-field')
    alertsfield: string;

    @Input()
    updateLib: updateLibrary;

    alerts: Alert[] = [];

    ngOnInit(){
        this.getAlerts();
    }

    constructor(private alertService: AlertService){}

    getAlerts(){
        this.subscription = this.alertService.getAlert()
            .subscribe(allalerts => {this.alerts = allalerts;
                       this.alerts.push({alerts_id: '-1', reference: "not choosing"});});
    }

    onChange(selected: string){
        let alert = this.lookup(selected.split(":")[0], this.alerts);
        this.updateLib.addalerts.push(alert);
    }

    private lookup(selected: string, alertstable: Alert[]): Alert{
        for(let r of alertstable){
            if(r.alerts_id == selected){
                return r;
            }
        }
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
