import { Injectable } from '@angular/core';

@Injectable()
export class SaveKeyService{
    private key: number = 0;

    save(thekey: number){
        this.key = thekey;
    }

    getkey(){
        return this.key;
    }
}