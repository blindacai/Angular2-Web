import { Component } from '@angular/core';

import '../rxjs-operators';

@Component({
    selector: 'project-title',
    template: `
                <h3>Manual Review</h3>
                <nav>
                    <a [routerLink] ="['/pending']" routerLinkActive="active">Pending</a>
                    <a [routerLink] ="['/search-db']" routerLinkActive="active">Search</a>
                    <!--<a [routerLink] ="['/tabtwo']" routerLinkActive="active">TabTwo</a>-->
                    <a [routerLink] ="['/tabthree']" routerLinkActive="active">History</a>
                    <a [routerLink] ="['/tabfour']" routerLinkActive="active">TabFour</a>
                </nav>
                <br>
                <router-outlet></router-outlet>
              `
    //templateUrl: 'app/view/navbar-title.html',
    //styleUrls: ['app/view/bootstrap.min.css', 'app/view/navbar.css']
})

export class ProjectTitleComponent {}
