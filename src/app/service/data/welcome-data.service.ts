import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HelloBean{
  constructor(public message: String){ }
}
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloBeanService(){
    return this.http.get <HelloBean>("http://localhost:8181/helloworldbean")
    console.log("execute Hello Bean Service from backend")
  }

  executeHelloBeanServiceWithPathVariable(name:any){
    // let basicAuthHeaderString = this.createBasicAuthanticationHttpHeader();
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get <HelloBean>(`http://localhost:8181/helloworldbean/path-variable/${name}`)
    //{headers})
    console.log("execute Hello Bean Service from backend")
  }

  // createBasicAuthanticationHttpHeader(){
  //   let username = 'sakshi';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' +window.btoa (username + ':' +password);
  //   return basicAuthHeaderString;
  // }
}
