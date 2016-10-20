import {Component, OnInit, OnDestroy} from '@angular/core';
import {MissionService} from "../tutorial-online/service-observable/mission.service";
import {Subscription, Observable} from "rxjs";

@Component({
    selector: 'tab-one',
    template: `
                {{title}}
                <!--
                <on-changes-parent></on-changes-parent>
                <br>
                <br>
                <heroes-list></heroes-list>
                <br>
                <mission-control></mission-control>
                <br> 
                -->
                <div *ngFor="let his of history">
                    {{his}}
                </div>
              `,
    //providers: [MissionService]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabOneComponent implements OnInit, OnDestroy{
    title: string = "This is TabOne";
    history: string[] = [];
    count: number = 0;
    counttwo: number = 0;
    countobs: number = 0;

    obs: Observable<string[]>;

    subscription: Subscription;

    ngOnInit(){
        //this.reviewed();
    }

    ngAfterContentInit(){
        //this.reviewed();
    }


    constructor(private missionService: MissionService){
        /*
        this.count++;
        this.missionService.getconfirmed().subscribe(astronaut => {
            this.history.push(`${astronaut} confirmed the mission`);
            console.log("now in tabone reviewed " + this.count + " " + astronaut);
        });
        */
        this.counttwo++;
        console.log("now in tab one constructor: " + this.counttwo);
        this.reviewed();
        //this.reviewed();
        //this.getdata();
    }

    reviewed(){
        this.count++;
        console.log("now in tab one reviewed: " + this.count);
        //this.missionService.getconfirmed().subscribe(() => console.log("give me sth..."));
        this.obs = this.missionService.getconfirmed();
        console.log(this.obs);
        //setTimeout( () => this.obs.subscribe(() => console.log("testing")), 0);
        this.subscription = this.obs.subscribe( data => console.log("testing"), err => console.log("empty"), () => console.log("complete"));
            /*
                                                            this.history = [];
                                                            for(let astro of astronaut){
                                                                this.history.push(`${astro} `);
                                                            }
                                                            this.countobs++;
                                                            console.log("now in tabone observable " + this.countobs + " " + this.history);
                                                            })*/
    }


getdata(){
    this.history = this.missionService.getdata();
}


    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
    
}
