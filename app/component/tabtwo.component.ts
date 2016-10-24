import { Component } from '@angular/core';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/library";
import {LibraryLocal} from "../service/library.localservice";


@Component({
    selector: 'tab-two',
    template: `
                {{title}}
                <div *ngIf = "libraries">
                    <div *ngFor = "let lib of libraries">
                        <br>
                        <input type = "checkbox">
                        <lib-list [library] = lib></lib-list>
                    </div>
                </div>

              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabTwoComponent {
  title: string = "This is TabTwo";
  libraries: Library[] = [];

  ngOnInit(): void {
    this.getLibraryFromLocal();
  }

  constructor(private libraryService: LibraryService, private librarylocal: LibraryLocal) { }

    getLibraryFromLocal() {
        this.libraryService.getLibraryFromLocal()
            .subscribe(libs => this.libraries = libs);
    }
}
