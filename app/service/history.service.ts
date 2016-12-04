import {Subject} from "rxjs/Subject";
import {Library} from "./model/library";
import {Injectable} from "@angular/core";

@Injectable()
export class HistoryService{
    private historySource = new Subject<Library[]>();
    historySource$ = this.historySource.asObservable();

    storage: Storage = localStorage;
    reviewedLibs: Library[] = JSON.parse(this.storage.getItem("history")) || [];

    addReviewedLibrary(lib: Library){
        this.reviewedLibs.push(lib);
        this.storage.setItem("history", JSON.stringify(this.reviewedLibs));
    }

    getReviewed(){
        this.historySource.next(this.reviewedLibs.slice(-3, this.reviewedLibs.length));
        return this.historySource$;
    }
}