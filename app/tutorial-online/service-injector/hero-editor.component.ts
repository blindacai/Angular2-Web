/**
 * Created by linda on 2016-10-16.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from './restore.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-editor',
    providers: [RestoreService],
    template: `
    <div>
      <span>Name:</span>
      <input (input)="hero.name=$event.target.value"/>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`
})

export class HeroEditorComponent {
    @Output() canceled = new EventEmitter();
    @Output() saved = new EventEmitter();

    count: number = 0;

    constructor(private restoreService: RestoreService<Hero>) {
        console.log("now in editor constructor: ");
    }

    @Input()
    set hero (hero: Hero) {
        console.log("now in hero-editor input hero: ");
        console.log(hero);
        this.restoreService.setItem(hero);
    }

    get hero () {
        this.count++;
        console.log("now in editor get hero: " + this.count);
        return this.restoreService.getItem();
    }


    onSaved () {
        this.saved.emit(this.restoreService.getItem());
    }

    onCanceled () {
        console.log("now in editor onCanceled: ");
        console.log(this.hero);
        this.hero = this.restoreService.restoreItem();
        console.log("now in editor onCanceled after change: ");
        console.log(this.hero);
        this.canceled.emit(this.hero);
    }
}
