import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthanticationService: HardcodedAuthanticationService) { }

  ngOnInit(): void {
    this.hardcodedAuthanticationService.logout();
  }

}
