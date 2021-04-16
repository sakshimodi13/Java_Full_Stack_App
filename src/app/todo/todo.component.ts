import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from './../list-todos/list-todos.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:any
  todo: any

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.todo = new ToDo(this.id,'',false,new Date());
    if(this.id!= -1){
    this.todoService.retriveTodo('sakshi', this.id).subscribe(
      data => this.todo = data
    )
    }
  }
  saveToDo(){
    if(this.id=== -1){
      this.todoService.createTodo('sakshi',this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )

    }
    else{
    this.todoService.updateTodo('sakshi', this.id,this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }
  }
}
