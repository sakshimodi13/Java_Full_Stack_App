import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class ToDo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : ToDo[]
  // = [
  //   new todo(1,'Spring boot',false,new Date()),
  //   new todo(2,'AWS',false,new Date()),
  //   new todo(3,'Angular',true,new Date()),
  //   new todo(4,'RestAPI',false,new Date()),
  //   new todo(5,'React',false,new Date()),
  // ]
  | undefined
  message: String | undefined;
  // = [
  //   new todo(1,'Spring boot',false,new Date()),
  //   new todo(2,'AWS',false,new Date()),
  //   new todo(3,'Angular',true,new Date()),
  //   new todo(4,'RestAPI',false,new Date()),
  //   new todo(5,'React',false,new Date()),
  // ]


  constructor(private todoservice:TodoDataService, private router: Router)  { }

  ngOnInit() {
    this.refreshToDos();
  }

  refreshToDos(){
    this.todoservice.retrieveAllTodos('sakshi').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id: any){
    console.log(`Delete todo ${id}`)
   this.todoservice.deleteTodo('sakshi', id).subscribe(
     response =>{
       console.log(response);
       this.message = 'delete of ${id} is successful'
       this.refreshToDos();
     }
   )
  }
  updateTodo(id: any){
    console.log(`Update todo ${id}`)
    this.router.navigate(['todos',id])

  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
