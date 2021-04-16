import { BasicAuthenticationService } from './../service/Basic-authantication.service';

import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';




@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {



  username = 'sakshi'

  password = ''

  errorMessage = 'Invalid Credentials'

  invalidLogin = false



  //Router

  //Angular.giveMeRouter

  //Dependency Injection

  constructor(private router: Router,

    private hardcodedAuthenticationService: HardcodedAuthanticationService,

    private basicAuthenticationService: BasicAuthenticationService) { }



  ngOnInit() {

  }



  handleLogin() {

    // console.log(this.username);

    //if(this.username==="in28minutes" && this.password === 'dummy') {

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {

      //Redirect to Welcome Page

      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false

    } else {

      this.invalidLogin = true

    }

  }

  handleJWTAuthLogin() {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)

        .subscribe(

          (          data: any) => {

            console.log(data)

            this.router.navigate(['welcome', this.username])

            this.invalidLogin = false      

          },

          (          error: any) => {

            console.log(error)

            this.invalidLogin = true

          }

        )

  }


  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)

        .subscribe(

          (          data: any) => {

            console.log(data)

            this.router.navigate(['welcome', this.username])

            this.invalidLogin = false      

          },

          (          error: any) => {

            console.log(error)

            this.invalidLogin = true

          }

        )

  }
}