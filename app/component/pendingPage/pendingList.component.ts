import { Component, OnInit, OnDestroy } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/model/library";
import {Subscription} from "rxjs";
import {LibraryLocal} from "../../other/library.localservice";


@Component({
    selector: 'pending-list',
    template: `
                {{title}}
                <br>
                <button (click) = "getLibraryFromDatabase()">Get The Latest Pending List</button>
                
                <div *ngIf = "libraries">
                    <div *ngFor = "let lib of libraries">
                        <br>
                        <lib-list [library] = lib></lib-list>
                        
                        <library-form 
                            [library] = lib 
                            (updatedLibs) = "updatedLibs($event)"
                            (reviewedLib) = "reviewedLib($event)">
                        </library-form>
                        
                    </div>
                </div>

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
    libraries: Library[] = [];
    reviewed: Library[] = [];

    subscription: Subscription;

    ngOnInit(): void {
        this.getLibraryFromLocal();
    }

    constructor(private libraryService: LibraryService, private librarylocal: LibraryLocal) {}


    getLibraryFromDatabase() {
        this.subscription = this.libraryService.getLibraryFromDatabase()
            .subscribe(libs => this.libraries = libs);
    }

/*
    getLibraryFromLocal() {
        this.libraries = this.librarylocal.getLibs();
    }
*/

    getLibraryFromLocal() {
        this.subscription = this.libraryService.getLibraryFromLocal()
            .subscribe(libs => this.libraries = libs);
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
