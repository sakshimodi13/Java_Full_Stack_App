import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthanticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if(username === 'sakshi' && password=== 'dummy'){
      sessionStorage.setItem('aythenticaterUser',username);
      return true;

    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('aythenticaterUser')
    return !(user==null)
  }
  logout(){
    sessionStorage.removeItem('aythenticaterUser')
  }
}
