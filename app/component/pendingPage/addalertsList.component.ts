import { Component, Input } from '@angular/core';
import {Alert} from "../../service/model/alert";
import {updateLibrary} from "../../service/model/updateLibrary";


@Component({
    selector: 'addalerts-list',
    template: `
                <div *ngFor = "let r of updateLib.addalerts" (click) = "onSelect(r)">
                    {{r.alerts_id}}: {{r.reference}}
                </div>
              `
})

export class AddAlertsList{
    @Input()
    updateLib: updateLibrary;

    onSelect(r: Alert){
        let alerts = this.updateLib.addalerts;
        alerts.splice(alerts.indexOf(r), 1);
    }
}
