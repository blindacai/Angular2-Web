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

    oldhero: Hero;
    copiedhero: Hero;

    //constructor(private restoreService: RestoreService<Hero>) {}

    @Input()
    set hero (hero: Hero) {
        //this.restoreService.setItem(hero);
        this.oldhero = hero;
        this.copiedhero = this.clone(hero);
    }

    clone(hero: Hero){
        return JSON.parse(JSON.stringify(hero));
    }

    get hero () {
        //return this.restoreService.getItem();
        return this.copiedhero;
    }

    onSaved () {
        //this.saved.emit(this.restoreService.getItem());
        this.saved.emit(this.hero);
    }

    onCanceled () {
        //this.hero = this.restoreService.restoreItem();
        this.hero = this.oldhero;
        //this.canceled.emit(this.hero);
        this.canceled.next(0);
    }
}
