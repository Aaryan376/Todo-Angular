import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: string[] = [];

  todo: string = "";
  
  editIndex: number | null = null;
  updateTodo : string = "";
  constructor(private todoService: TodoListService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodos(Todo: string){
    console.log(Todo);
    if(Todo !== ''){
      this.todoService.addTodo(Todo);
      this.todos = this.todoService.getTodos();
      this.todo = "";
    }

  }

  removeTodos(index:number){
    this.todoService.removeTodo(index);
    this.todos = this.todoService.getTodos();
  }

  handleEdit(editIndex: number , updateTodo: string){
      this.todoService.updateTodo(editIndex, updateTodo);
      this.editIndex = null;
      this.todos = this.todoService.getTodos();
  }



}
