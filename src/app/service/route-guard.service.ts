import { HardcodedAuthanticationService } from './hardcoded-authantication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthanticationService: HardcodedAuthanticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthanticationService.isUserLoggedIn()){
      return true;
      this.router.navigate(['login']);
    }
    return false;
    
  }
}
