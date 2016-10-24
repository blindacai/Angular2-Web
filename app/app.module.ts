// modules
//import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { FormsModule } from '@angular/forms';

// components
import { ProjectTitleComponent } from './component/project-title.component';

// service
import {LibraryService} from "./service/library.service";
import {HistoryService} from "./service/history.service";
import {formatLibService} from "./service/formatLib.service";
import {LibraryLocal} from "./service/library.localservice";

// export const
import {exampleComponents, pendingComponents} from "./assemble";
import { routing } from './app.route'


// Looks like adding Angular2-in-memory-web-api in 'imports' will override other mock servers
@NgModule({
  imports: [ BrowserModule,
             routing,
             HttpModule,
             JsonpModule,
             FormsModule,

             ModalModule.forRoot(),
             BootstrapModalModule
           ],

  declarations: [
      ProjectTitleComponent,
      ...pendingComponents,
      ...exampleComponents
  ],

  providers: [LibraryService,
              formatLibService,
              HistoryService,
              LibraryLocal],

  bootstrap: [ ProjectTitleComponent ]
})
export class AppModule { }
