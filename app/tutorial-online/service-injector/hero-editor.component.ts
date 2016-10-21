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
      <!--<input (input)="hero.name=$event.target.value"/>-->
      <input [(ngModel)]="hero.name"/>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`
})

export class HeroEditorComponent {
    @Output() canceled = new EventEmitter();
    @Output() saved = new EventEmitter();

    constructor(private restoreService: RestoreService<Hero>) {}

    @Input()
    set hero (hero: Hero) {
        this.restoreService.setItem(hero);
    }

    get hero () {
        return this.restoreService.getItem();
    }

    onSaved () {
        this.saved.emit(this.restoreService.getItem());
    }

    onCanceled () {
        this.hero = this.restoreService.restoreItem();
        //this.canceled.emit(this.hero);
        this.canceled.next(0);
    }
}
