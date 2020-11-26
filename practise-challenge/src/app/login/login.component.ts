import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../models/teamMember';
import {AuthService} from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  failed: boolean;
  err: string;
  member: TeamMember;

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  /* login(form) {
    console.log(form.value)
    this.authService.login(form.value).then()
      .catch((err) => {
        this.failed = true;
        this.err = err['status'];
      })
      .finally(() => {
      });
    form.reset();
  } */

  login(form) {
    this.authService.login(form.value).subscribe({
      next: data => {
        this.member = data;
        console.log(data);
        this.dataService.member = data;
        if(this.member.authorized == true)
          localStorage.setItem('Authorized', "true");
      },
      error: error => {
        console.log(error);
      }
    })
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
