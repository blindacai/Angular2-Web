import { Component, OnInit, OnDestroy } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";
import {Subscription} from "rxjs";
import {LibraryLocal} from "../../other/library.localservice";
import {Alert} from "../../service/model/alert";
import {AlertService} from "../../service/alert.service";


@Component({
    selector: 'pending-list',
    template: `
                {{title}}
                <br>
                <button (click) = "getLibraryFromDatabase()">Get The Latest Pending List</button>
                <br>
                <br>
                <div *ngIf = "libraries">
                <table class = "table table-bordered">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>lib</th>
                        <th>sublib</th>
                        <th>status</th>
                        <th>comments</th>
                        <th>alerts</th>
                        <th>tab7</th>
                        <th>tab8</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr *ngFor = "let lib of libraries" [pending-lib] = "lib"></tr>

                            <!--<lib-list [library] = lib></lib-list>-->
                            
                        
                    </tbody>
                </table>
                    
                </div>
                
                <!--
                <div *ngIf = "test">                
                <library-form 
                    [library] = test
                    [alerts] = alerts
                    (updatedLibs) = "updatedLibs($event)"
                    (reviewedLib) = "reviewedLib($event)">
                </library-form>
                </div>
                -->

                <br>
                <div *ngIf = "reviewed.length > 0">
                    <div *ngFor = "let lib of reviewed">
                        {{lib.id}} has been reviewed
                    </div>
                    <p>For details, go to History tab</p>
                </div>
                
                <br>
                <dialogue></dialogue>
                
                <!--<hero-form></hero-form>-->
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class PendingListComponent implements OnInit, OnDestroy {
    title: string = "This is Pending page";

    alerts: Alert[] = [];

    libraries: Library[] = [];
    reviewed: Library[] = []

    test: Library;

    subscription: Subscription;

    ngOnInit(): void {
        this.getLibraryFromLocal();
        //this.getAlerts();
    }

    constructor(private libraryService: LibraryService,
                private alertService: AlertService) {}


    getLibraryFromDatabase() {
        this.subscription = this.libraryService.getLibraryFromDatabase()
            .subscribe(libs => this.libraries = libs);
    }


    getLibraryFromLocal() {
        this.subscription = this.libraryService.getLibraryFromLocal()
            .subscribe(libs => {this.libraries = libs; this.test = libs[0]});
    }

    getAlerts(){
        this.subscription = this.alertService.getAlert()
                                             .subscribe(allalerts => {this.alerts = allalerts; 
                                                                      this.alerts.push({alerts_id: '', reference: "not choosing"});});
    }


    updatedLibs(libs: Library[]) {
        this.libraries = libs;
    }

    reviewedLib(lib: Library) {
        this.reviewed.push(lib);
    }

    ngOnDestroy(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
