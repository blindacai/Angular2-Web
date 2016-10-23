import {Subject} from "rxjs/Subject";
import {Library} from "./library";
import {Injectable} from "@angular/core";

@Injectable()
export class HistoryService{
    private historySource = new Subject<Library[]>();
    reviewedLibs: Library[] = [];

    historySource$ = this.historySource.asObservable();

    addReviewedLibrary(lib: Library){
        this.reviewedLibs.push(lib);
    }

    getReviewed(){
        this.historySource.next(this.reviewedLibs);
        return this.historySource$;
    }
}