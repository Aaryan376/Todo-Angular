import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  todos: string[] = [];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
   this.todos.splice(index, 1);
  }

  getTodos(): string[] {
    return this.todos;
  }

  updateTodo(editIndex: number, updateTodo: string) {
     this.todos[editIndex] = updateTodo;
  }
}
