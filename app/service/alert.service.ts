import {Alert} from "./model/alert";

export class AlertService{
    alerts: Array<Alert> = [{id: "99", reference: "alertone"},
                            {id: "88", reference: "alerttwo"},
                            {id: "77", reference: "alertthree"},
                            {id: "66", reference: "alertfour"}];

    getAlert(){
        return this.alerts;
    }
}
