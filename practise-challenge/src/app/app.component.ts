import { Component } from '@angular/core';
import {AuthService} from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-challenge';

  loggedIn: boolean;
  isAuthorized: boolean;

  constructor(private authService: AuthService) {
    this.authService.loggedIn.subscribe(data => {
      this.loggedIn = data;
    })
    this.authService.isAuthorized.subscribe(data => {
      this.isAuthorized = data;
    })
  }

}
