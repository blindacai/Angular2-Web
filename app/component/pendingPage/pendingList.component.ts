import { Component, OnInit, OnDestroy } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";
import {Subscription} from "rxjs";
import {AlertService} from "../../service/alert.service";


@Component({
    selector: 'pending-list',
    template: `
                <br>
                <button (click) = "getLibraryFromDatabase()">Get The Latest Pending List</button>
                
                <br>
                <div *ngIf = "errorMsg">
                    {{errorMsg}}
                </div>
                
                <br>
                <br>
                <div *ngIf = "libraries">
                    <table class = "table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th> <th>lib</th> <th>sublib</th> <th>lims protocol</th> <th>status</th> <th>comments</th> <th>alerts</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr *ngFor = "let lib of libraries" [pending-lib] = "lib" 
                                                                (updatedLibraries) = "updatedLibs($event)"></tr>
                        </tbody>
                    </table>
                </div>
                
                <!--<dialogue></dialogue>-->
                <!--<hero-form></hero-form>-->
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class PendingListComponent implements OnInit, OnDestroy {
    libraries: Library[] = [];
    reviewed: Library[] = [];
    errorMsg: string;

    subscription: Subscription;

    ngOnInit(): void {
        this.getLibraryFromLocal();
    }

    constructor(private libraryService: LibraryService) {}


    getLibraryFromDatabase() {
        this.subscription = this.libraryService.getLibraryFromDatabase()
            .subscribe(libs => this.libraries = libs,
                       error => this.errorMsg = error);
    }


    getLibraryFromLocal() {
        this.subscription = this.libraryService.getLibraryFromLocal()
            .subscribe(libs => {this.libraries = libs});
    }

    updatedLibs(libs: Library[]) {
        this.libraries = libs;
    }


    ngOnDestroy(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
