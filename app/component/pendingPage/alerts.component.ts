import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {AlertService} from "../../service/alert.service";
import {Subscription} from "rxjs";
import {Alert} from "../../service/model/alert";
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
    selector: '[alerts-field]',
    template: `
                <td>{{alertsField}} {{updateLib.addalerts}}
                    <br>
                    <select id = "alerts" #local_alerts name = "alerts"
                        (change) = "onChange(local_alerts.value)">
                        <option *ngFor = "let r of alerts" [value] = "r.alerts_id">
                            {{r.alerts_id}}: {{r.reference}}
                        </option>
                    </select>
                </td>
              `
})

export class AlertsField implements OnInit, OnDestroy{
    subscription: Subscription;

    @Input('alerts-field')
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
                       this.alerts.push({alerts_id: '', reference: "not choosing"});});
    }

    onChange(selected: string){
        this.updateLib.addalerts.push(selected);
    }

    ngOnDestroy(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
