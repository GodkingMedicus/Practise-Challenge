import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fixture } from '../models/fixture';
import { TeamMember } from '../models/teamMember';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //apiURL = "https://localhost:5001/api";
  apiURL = "https://basketball20201126132458.azurewebsites.net/api";
  passFixture: Fixture;
  member: TeamMember;

  constructor(private _http: HttpClient) { }

  addFixture(fixture: Fixture){
    console.log(fixture);
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/Games", fixture).subscribe(
        () => {
          console.log("Fixture added");
          resolve();
        },
        err => {
          console.error("Error adding fixture");
          reject(err);
        });
    })
  }

  getFixtures() {
    return this._http.get<Fixture[]>(this.apiURL + "/Games");
  }

  getFutureFixtures() {
    return this._http.get<Fixture[]>(this.apiURL + "/Games/Future");
  }

  updateFixture(fixture: Fixture){
    console.log(fixture);
    return new Promise((resolve, reject) => {
      this._http.put(this.apiURL + "/Games/" + fixture.gameId, fixture).subscribe(
        () => {
          console.log("Game updated")
          resolve();
        },
        err => {
          console.error("Error updating Game")
          reject(err);
        })
    })
  }

  deleteFixture(fixture: Fixture){
    return new Promise((resolve, reject) => {
      this._http.delete(this.apiURL + "/Games/" + fixture.gameId).subscribe(
        () => {
          console.log("Game deleted")
          resolve();
        },
        err => {
          console.error("Error deleting Game")
          reject(err);
        })
    })
  }

  getTeamMembers() {
    return this._http.get<Fixture[]>(this.apiURL + "/TeamMembers");
  }

  updateMember(member: TeamMember, auth: string) {
    member.role = auth;
    return new Promise((resolve, reject) => {
      this._http.put(this.apiURL + "/TeamMembers/" + member.userId, member).subscribe(
        () => {
          console.log("Game updated")
          resolve();
        },
        err => {
          console.error("Error updating Game")
          reject(err);
        })
    })
  }
}
