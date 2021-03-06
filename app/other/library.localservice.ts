import {Injectable} from "@angular/core";
import {Library} from "../service/model/library";


@Injectable()
export class LibraryLocal{
    libs: Library[];

    assign(libs: Library[]){
        this.libs = libs;
    }

    getLibs(){
        return this.libs;
    }
}