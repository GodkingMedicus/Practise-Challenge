import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from './data.service';
import { TeamMember } from '../models/teamMember';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = "https://localhost:5001/api";
  loggedIn: BehaviorSubject<boolean>;
  isAuthorized: BehaviorSubject<boolean>;

  constructor(private _http: HttpClient, private jwtHelper: JwtHelperService, private dataService: DataService) { 
    this.loggedIn = new BehaviorSubject(null);
    this.isAuthorized = new BehaviorSubject(null);
    this.loggedIn.next(false);
    if(this.isLoggedIn()) {
      this.loggedIn.next(true);
      if(this.jwtHelper.decodeToken(localStorage.getItem('Authorization')).Authorized == true)
            this.isAuthorized.next(true);
          else
            this.isAuthorized.next(false);
    }
    else 
      this.loggedIn.next(false);
  }

  login(credentials: Login){

    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/TeamMembers/login", credentials).subscribe(
        (token) => {
          console.log("Logged in")
          localStorage.setItem('Authorization', JSON.stringify(token['token']))
          if(this.jwtHelper.decodeToken(token['token']).Authorized == true)
            this.isAuthorized.next(true);
          else
            this.isAuthorized.next(false);
          this.loggedIn.next(true);
          resolve();
        },
        err => {
          console.error("Login Error")
          this.loggedIn.next(false);
          reject(err);
        });
    })
  }

  signUp(credentials: TeamMember) {
    credentials.role = "test";
    credentials.Authorized = true;

    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/TeamMembers", credentials).subscribe(
        () => {
          console.log("User added")
          resolve();
        },
        err => {
          console.error("Error adding user")
          reject(err);
        })
      })
  }

  isLoggedIn(){
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    localStorage.removeItem('Authorization');
    localStorage.removeItem('StaffID');
    this.loggedIn.next(false);
  }
}
