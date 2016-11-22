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
import {LibraryLocal} from "./other/library.localservice";

// export const
import {exampleComponents, pendingComponents, rowComponents} from "./assemble";
import { routing } from './app.route'
import {FileContentService} from "./service/fileContent.service";
import {AlertService} from "./service/alert.service";


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
      ...exampleComponents,
      ...rowComponents
  ],

  providers: [LibraryService,
              formatLibService,
              HistoryService,
              LibraryLocal,
              FileContentService,
              AlertService],

  bootstrap: [ ProjectTitleComponent ]
})
export class AppModule { }
