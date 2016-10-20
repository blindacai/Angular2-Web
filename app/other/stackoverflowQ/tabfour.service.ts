import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Observable} from "rxjs";

@Injectable()
export class TabFourService {
    items: string;

    private itemSource = new Subject<string>();

    constructor(){}

    itemSource$ = this.itemSource.asObservable();

    getItems(): Observable<string> {
        this.itemSource.next("bbb");
        return this.itemSource$;
    }

}
