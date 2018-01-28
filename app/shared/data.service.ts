import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataSevice extends InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Learn Javascript',
        completed: true
      },
      {
        id: 2,
        title: 'Learn Angular2',
        completed: false
      },
      {
        id: 3,
        title: 'Make an Angular2 Todo application',
        completed: false
      }
    ];

    return { todos };
  }
}
