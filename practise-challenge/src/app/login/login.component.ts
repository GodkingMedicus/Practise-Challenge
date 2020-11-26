import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  failed: boolean;
  err: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(form) {
    console.log(form.value)
    this.authService.login(form.value).then()
      .catch((err) => {
        this.failed = true;
        this.err = err['status'];
      })
      .finally(() => {
      });
    form.reset();
  }

  signUp(form) {
    console.log(form.value)
    this.authService.signUp(form.value).then()
      .catch((err) => {
        this.failed = true;
        this.err = err['status'];
      })
      .finally(() => {
      });
    form.reset();
  }
}
