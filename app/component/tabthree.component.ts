import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {HistoryService} from "../service/history.service";
import {Library} from "../service/model/library";

import {Subscription} from "rxjs";

@Component({
    selector: 'about',
    template: `
                {{title}}
                <div *ngFor = "let lib of reviewed">
                    {{lib.id}}, {{lib.status}}, {{lib.comments}}
                </div>
              `
    //templateUrl: 'app/view/navbar-body.html'
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabThreeComponent implements OnInit, OnDestroy{
    title: string = "This is TabThree";

    test: string;

    subscription: Subscription;
    reviewed: Library[] = [];

    ngOnInit(){
        this.getReviewedLib();
    }

    constructor(private historyService: HistoryService){}

    getReviewedLib(){
        this.subscription = this.historyService.getReviewed().subscribe(libs => this.reviewed = libs);
        this.historyService.getReviewed();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
