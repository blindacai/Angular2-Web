import { Component } from '@angular/core';

import {MissionService} from "../tutorial-online/service-observable/mission.service";
import {TabFourService} from "../other/stackoverflowQ/tabfour.service";

@Component({
    selector: 'about',
    template: `
                {{title}}
                <my-astronaut></my-astronaut>
              `
    //templateUrl: 'app/view/navbar-body.html'
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabThreeComponent {
    title: string = "This is TabThree";
}
