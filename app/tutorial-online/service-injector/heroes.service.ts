/**
 * Created by linda on 2016-10-16.
 */

import { Hero } from './hero';

export class HeroesService {
    heroes: Array<Hero> = [
        { name: 'RubberMan', power: 'flexibility'},
        //{ name: 'Tornado', power: 'Weather changer'}
    ];

    getHeroes () {
        return this.heroes;
    }
}
