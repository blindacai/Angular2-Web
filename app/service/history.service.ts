import {Subject} from "rxjs/Subject";
import {Library} from "./library";
import {Injectable} from "@angular/core";

@Injectable()
export class HistoryService{
    private historySource = new Subject<Library[]>();
    historySource$ = this.historySource.asObservable();

    storage: Storage = localStorage;
    reviewedLibs: Library[] = JSON.parse(this.storage.getItem("history"));

    addReviewedLibrary(lib: Library){
        this.reviewedLibs.push(lib);
        this.storage.setItem("history", JSON.stringify(this.reviewedLibs));
    }

    getReviewed(){
        this.historySource.next(this.reviewedLibs);
        return this.historySource$;
    }
}