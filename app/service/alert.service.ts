import {Alert} from "./model/alert";

export class AlertService{
    alerts: Array<Alert> = [{id: "99", reference: "alertone"},
                            {id: "88", reference: "alerttwo"}];

    getAlert(){
        return this.alerts;
    }
}
