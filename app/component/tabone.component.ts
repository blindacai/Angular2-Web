import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";

@Component({
    selector: 'tab-one',
    template: `
                {{title}}
                <on-changes-parent></on-changes-parent>
                <br>
                <heroes-list></heroes-list>
              `,
    //providers: [MissionService]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabOneComponent {
    title: string = "This is TabOne";  
}
