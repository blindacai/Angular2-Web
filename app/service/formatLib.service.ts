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
                                lib: lib.lib,
                                sublib: lib.sublib,
                                status: lib.status.qc0_status,
                                comments: lib.status.qc_comments,
                                addcomments: null
                                };
        return library;
    }
}