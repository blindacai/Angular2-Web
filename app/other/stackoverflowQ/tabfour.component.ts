import {Component, OnInit, OnDestroy} from '@angular/core';
import {TabFourService} from "./tabfour.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'tab-four',
    template: `
                {{title}}
                <p>this is test: {{test}}</p>
                `,
    providers: [TabFourService]
})

export class TabFourComponent implements OnInit, OnDestroy{
    title: string = "This is Tab four";
    test: string;
    subscription: Subscription;

    constructor(private tabfourService: TabFourService){}

    ngOnInit() {
    this.subscription = this.tabfourService.getItems()
                            .subscribe(data => this.test = data);
    // The subscription has been taken in charge, now call the service's method
    this.tabfourService.getItems();
    }

/*
     ngOnInit(){
     console.log("now in init");
     this.getItems();
     this.getItems();
     }
*/

/*
    getItems(){
        console.log("now in get items");
        this.subscription = this.tabfourService.getItems()
                                .subscribe(data => console.log("testing observable"));
    }
*/

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}