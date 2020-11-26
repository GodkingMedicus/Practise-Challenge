import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = "https://localhost:5001/api";
  passFixture: Fixture;

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
}
