import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
//import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';

import { PendingListComponent } from './component/pendingPage/pendingList.component';
import { ProjectTitleComponent } from './component/project-title.component';
import { TabTwoComponent } from './component/tabtwo.component';
import { TabOneComponent } from './component/tabone.component';
import { TabThreeComponent } from './component/tabthree.component';
import { routing } from './app.route'

import {PendingLibraryComponent} from "./component/pendingPage/PendingLibrary.component";
import {ReviewComponent} from "./component/review.component";

import { FormsModule } from '@angular/forms';
import {HeroFormComponent} from "./tutorial-online/form/hero-form.component";
import {LibraryFormComponent} from "./component/pendingPage/libraryform.component";
import {OnChangesParentComponent} from "./tutorial-online/onchange/onchange.parent.component";
import {OnChangesComponent} from "./tutorial-online/onchange/onchange.child.component";
import {LibraryService} from "./service/library.service";

//import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
//import {DialogueComponent} from "./tutorial-online/modal-test/dialogue.component";

// Looks like adding Angular2-in-memory-web-api in 'imports' will override other mock servers
@NgModule({
  imports: [ BrowserModule,
             routing,
             HttpModule,
             JsonpModule,
             FormsModule

             //BootstrapModalModule
           ],

  declarations: [
    ProjectTitleComponent,

    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,

    PendingListComponent,
    PendingLibraryComponent,
    LibraryFormComponent,

    ReviewComponent,

    // form examples
    HeroFormComponent,

    // onchanges examples
    OnChangesParentComponent,
    OnChangesComponent

    //testing
    //DialogueComponent
  ],

  providers: [LibraryService],

  bootstrap: [ ProjectTitleComponent ]
})
export class AppModule { }
