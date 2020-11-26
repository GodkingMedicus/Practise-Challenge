import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from './data.service';
import { TeamMember } from '../models/teamMember';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //apiURL = "https://localhost:5001/api";
  apiURL = "https://basketball20201126132458.azurewebsites.net/api/";
  loggedIn: BehaviorSubject<boolean>;
  isAuthorized: BehaviorSubject<boolean>;

  constructor(private _http: HttpClient, private jwtHelper: JwtHelperService, private dataService: DataService) { 
    this.loggedIn = new BehaviorSubject(null);
    this.isAuthorized = new BehaviorSubject(null);
    this.loggedIn.next(false);
    this.isAuthorized.next(false);
    if(localStorage.getItem('LoggedIn') == "true") {
      this.loggedIn.next(true);
      //if(this.jwtHelper.decodeToken(localStorage.getItem('Authorization')).Authorized == true)
        if(localStorage.getItem('LoggedIn') == "true")
            this.isAuthorized.next(true);
          else
            this.isAuthorized.next(false);
    }
    else 
      this.loggedIn.next(false);
  }

  login(credentials: Login){

    /* return new Promise((resolve, reject) => {
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
    }) */
    localStorage.setItem('LoggedIn', "true");
    this.loggedIn.next(true);
    this.isAuthorized.next(true);
    console.log(credentials.userId)
    return this._http.get<TeamMember>(this.apiURL + "/TeamMembers/" + credentials.userId);
  }

  signUp(credentials: TeamMember) {
    credentials.role = "UnAuthorized";
    credentials.authorized = true;

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
