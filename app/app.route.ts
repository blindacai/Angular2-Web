import { Routes, RouterModule } from '@angular/router';

import { TabOneComponent } from './component/tabone.component'
import { PendingListComponent } from "./component/pendingPage/pendingList.component";
import {TabTwoComponent} from "./component/tabtwo.component";
import {TabThreeComponent} from "./component/tabthree.component";
import {ReviewComponent} from "./component/reviewPage/review.component";
import {TabFourComponent} from "./other/stackoverflowQ/tabfour.component";
import {SearchDBComponent} from "./component/searchPage/searchdb.component";
import {EditLibComponent} from "./component/searchPage/editLib.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pending',
        pathMatch: 'full'
    },
    {
        path: 'pending',
        component: PendingListComponent
    },
    {
        path: 'search-db',
        component: SearchDBComponent
    },
    {
        path: 'tabtwo',
        component: TabTwoComponent
    },
    {
        path: 'tabthree',
        component: TabThreeComponent
    },
    {
        path: 'tabfour',
        component: TabFourComponent
    },
    {
        path: 'review/:id',
        component: ReviewComponent
    },
    {
        path: 'edit/:id',
        component: EditLibComponent
    }
]

export const routing = RouterModule.forRoot(routes);
