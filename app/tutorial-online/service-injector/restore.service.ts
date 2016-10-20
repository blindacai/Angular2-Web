/**
 * Created by linda on 2016-10-16.
 */

export class RestoreService<T> {
    originalItem: T;
    currentItem: T;
    thirdItem: T;

    count: number = 0;

    constructor(){
        console.log("now in service constructor: ");
    }

    setItem (item: T) {
        console.log("now in restore service set item: ");
        this.originalItem = item;
        this.currentItem = this.clone(item);
        //this.thirdItem = item;

        //this.currentItem = this.originalItem;
        console.log(this.originalItem);
        console.log(this.currentItem);
        //console.log(this.thirdItem);

    }

    getItem (): T {
        this.count++;
        console.log("now in service get item: " + this.count);
        console.log(JSON.stringify(this.originalItem));
        console.log(this.currentItem);
        return this.currentItem;
    }

    restoreItem (): T {
        console.log("now in restore service restore item: ");
        console.log(this.originalItem);
        //console.log(this.currentItem);
        //console.log(this.thirdItem);

        return this.originalItem;
        //this.currentItem = this.originalItem;
        //return this.getItem();
    }

    clone (item: T): T {
        // super poor clone implementation
        console.log("now in clone: ");
        return JSON.parse(JSON.stringify(item));
        //return item;
    }
}
