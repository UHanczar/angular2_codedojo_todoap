import { Component } from "@angular/core";

class Todo {
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    title: 'Learn Javascript',
    completed: true
  },
  {
    title: 'Learn Angular2',
    completed: false
  }, {
    title: 'Make an Angular2 Todo application',
    completed: false
  }
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Angular Todo Application';
  todos: Todo[] = todos;

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}