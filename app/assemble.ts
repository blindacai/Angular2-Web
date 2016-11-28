import {HeroFormComponent} from "./tutorial-online/form/hero-form.component";
import {DialogueComponent} from "./tutorial-online/modal-test/dialogue.component";
import {OnChangesParentComponent} from "./tutorial-online/onchange/onchange.parent.component";
import {OnChangesComponent} from "./tutorial-online/onchange/onchange.child.component";
import {HeroEditorComponent} from "./tutorial-online/service-injector/hero-editor.component";
import {HeroCardComponent} from "./tutorial-online/service-injector/hero-card.component";
import {HeroesListComponent} from "./tutorial-online/service-injector/heros-list.component";
import {TabFourComponent} from "./other/stackoverflowQ/tabfour.component";
import {TabOneComponent} from "./component/tabone.component";
import {TabTwoComponent} from "./component/tabtwo.component";
import {TabThreeComponent} from "./component/tabthree.component";
import {ReviewComponent} from "./component/reviewPage/review.component";
import {PendingListComponent} from "./component/pendingPage/pendingList.component";
import {PendingLibraryComponent} from "./component/pendingPage/PendingLibrary.component";
import {SplitPipe} from "./pipe/split.pipe";
import {IdField} from "./component/pendingPage/Id.component";
import {LibField} from "./component/pendingPage/lib.component";
import {SublibField} from "./component/pendingPage/sublib.component";
import {StatusField} from "./component/pendingPage/status.component";
import {CommentsField} from "./component/pendingPage/comments.component";
import {UpdateButton} from "./component/pendingPage/updateLibButton.component";
import {AlertsField} from "./component/pendingPage/alerts.component";
import {AddAlertsList} from "./component/pendingPage/addalertsList.component";
import {FileListComponent} from "./component/reviewPage/filelist.component";
import {FileContentComponent} from "./component/reviewPage/filecontent.component";
import {UploadFileComponent} from "./component/reviewPage/upload.component";
import {HighlightDirective} from "./directive/highlight.directive";

export const exampleComponents = [
    // form
    HeroFormComponent,

    // modal-test
    DialogueComponent,

    // onchange
    OnChangesParentComponent,
    OnChangesComponent,

    // service injector
    HeroesListComponent,
    HeroCardComponent,
    HeroEditorComponent,

    TabFourComponent,

    SplitPipe
];

export const pendingComponents = [
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    ReviewComponent,

    PendingListComponent,
    PendingLibraryComponent
];

export const rowComponents = [
    IdField,
    LibField,
    SublibField,
    StatusField,
    CommentsField,
    AlertsField,
    AddAlertsList,

    UpdateButton,

    FileListComponent,
    FileContentComponent,
    UploadFileComponent,

    HighlightDirective
]