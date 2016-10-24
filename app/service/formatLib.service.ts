import {Injectable} from "@angular/core";
import {Library} from "./library";

@Injectable()
export class formatLibService{
    libraries: any[] = [];

    formatLibs(libs: any[]): Library[]{
        this.libraries = [];
        for(let lib of libs){
            this.libraries.push(this.formatLib(lib));
        }
        return this.libraries;
    }

    formatLib(lib: any): Library{
        var library: Library = {
                                id: lib.id,
                                library_id: lib.library_id,
                                status: lib.status.qc0_status,
                                comments: lib.status.qc_comments,
                                addcomments: null
                                };
        return library;
    }
}