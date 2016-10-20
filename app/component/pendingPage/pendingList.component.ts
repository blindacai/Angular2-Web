import { Component, OnInit, OnDestroy } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/library";
import {Subscription} from "rxjs";


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
                <div *ngIf = "reviewed">
                    <div *ngFor = "let lib of reviewed">
                        {{lib.id}} has been reviewed
                    </div>
                </div>
                
                <br>
                <dialogue></dialogue>
                
                <!--<hero-form></hero-form>-->
              `,
    providers: [ LibraryService ]
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

    constructor(private libraryService: LibraryService) {
    }


    getLibraryFromDatabase() {
        this.libraries = [];
        this.subscription = this.libraryService.getLibraryFromDatabase()
            .subscribe(libs => this.createLibs(libs));
    }

    getLibraryFromLocal() {
        this.subscription = this.libraryService.getLibraryFromLocal()
            .subscribe(libs => this.createLibs(libs));

    }

    updatedLibs(libs: any[]) {
        this.libraries = [];
        this.createLibs(libs)
    }

    private createLibs(libs: any): void {
        for (let lib of libs) {
            this.libraries.push(new Library(lib.id, lib.library_id, lib.status.qc0_status, lib.status.qc_comments, lib.addcomments))
        }
    }


    reviewedLib(lib: any) {
        this.reviewed.push(new Library(lib.id, lib.library_id, lib.status.qc0_status, lib.status.qc_comments, lib.addcomments));

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();

    }


    /*
     getLibraryFromDatabase() {
     this.libraryService.getLibraryFromDatabase()
     .subscribe(libs => this.libraries = libs);
     }

     getLibraryFromLocal(){
     this.libraryService.getLibraryFromLocal().subscribe(lib => this.libraries = lib);
     }
     */

}
