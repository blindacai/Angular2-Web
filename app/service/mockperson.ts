import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class PersonData implements InMemoryDbService {
  createDb() {
    let persons = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    return {persons};
  }
}
