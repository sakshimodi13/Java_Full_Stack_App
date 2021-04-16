
import { ToDo } from './../../list-todos/list-todos.component';


import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { API_URL, ToDo_JPA_API_URL } from 'src/app/app.constants';



@Injectable({

  providedIn: 'root'

})

export class TodoDataService {



  constructor(

    private http:HttpClient

  ) { }



  retrieveAllTodos(username:any) {

    return this.http.get<ToDo[]>(`${ToDo_JPA_API_URL}/users/${username}/todos`);

    //console.log("Execute Hello World Bean Service")

  }
  deleteTodo(username: any,id: any){
    return this.http.delete(`${ToDo_JPA_API_URL}/users/${username}/todos/${id}`)

  }
  retriveTodo(username: any, id: any){
    return this.http.get<ToDo>(`${ToDo_JPA_API_URL}/users/${username}/todos/${id}`)

  }

  updateTodo(username: any, id: any,todo: any){
    return this.http.put(`${ToDo_JPA_API_URL}/users/${username}/todos/${id}`,todo);

  }
  createTodo(username: any, todo: any){
    return this.http.post(`${ToDo_JPA_API_URL}/users/${username}/todos`,todo);

  }
}