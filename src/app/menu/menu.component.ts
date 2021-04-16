import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthanticationService: HardcodedAuthanticationService) { }

  ngOnInit() {
   // this.isUserLoggedIn=  this.hardcodedAuthanticationService.isUserLoggedIn();

  }

}
