import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, public data: DataService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const authorized = route.data.authorized;
    const tokenPayload = localStorage.getItem('Authorization');
    
    if (tokenPayload == authorized) {
        console.log(false);
      return false;
    }
    console.log(true);
    return true;
  }
}