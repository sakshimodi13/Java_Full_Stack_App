import { WelcomeDataService } from './../service/data/welcome-data.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  welcomeMessageFromService: String | undefined;
  name =''

  constructor(private route: ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    this.service.executeHelloBeanService().subscribe(response => this.handleSuccessfulResponse(response), error => this.handleErrorReponse(error));
  
   // console.log("get welcome message")
  }
  getWelcomeMessageWithParameter(){
    this.service.executeHelloBeanServiceWithPathVariable(this.name).subscribe(response => this.handleSuccessfulResponse(response), error => this.handleErrorReponse(error));
  }
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
  }
  handleErrorReponse(error: any){
    
    this.welcomeMessageFromService = error.error.message;
    
  }

}
