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
import {ReviewComponent} from "./component/review.component";
import {PendingListComponent} from "./component/pendingPage/pendingList.component";
import {PendingLibraryComponent} from "./component/pendingPage/PendingLibrary.component";
import {LibraryFormComponent} from "./component/pendingPage/libraryform.component";
import {SplitPipe} from "./pipe/split.pipe";

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
    PendingLibraryComponent,
    LibraryFormComponent,
];