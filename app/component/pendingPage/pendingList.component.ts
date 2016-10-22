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
        this.subscription = this.libraryService.getLibraryFromDatabase()
            .subscribe(libs => this.libraries = libs);
    }

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
