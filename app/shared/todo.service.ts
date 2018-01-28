import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';
import {_catch} from "rxjs/operator/catch";

@Injectable()
export class TodoService {
  private apiUrl = '/api/todos';
  todos: Todo[] = [];

  constructor(private http: Http) {}

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.apiUrl)
                    .toPromise()
                    .then(res => res.json().data)
                    .then(todos => this.todos = todos)
                    .catch(this.handleError);
  }

  createTodo(title: string) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let todo = new Todo(title);

    // this.todos.push(todo);
    this.http.post(this.apiUrl, todo, options)
              .toPromise()
              .then(res => res.json().data)
              .then(todo => this.todos.push(todo))
              .catch(this.handleError);
  }

  deleteTodo(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let deleteUrl = `${this.apiUrl}/${todo.id}`;

    this.http.delete(deleteUrl, options)
              .toPromise()
              .then(res => {
                let index = this.todos.indexOf(todo);

                if (index > -1) {
                  this.todos.splice(index, 1);
                }
              })
              .catch(this.handleError);
  }

  toggleTodo(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let deleteUrl = `${this.apiUrl}/${todo.id}`;

    this.http.put(deleteUrl, todo, options)
      .toPromise()
      .then(res => {
        todo.completed = !todo.completed;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }
}
