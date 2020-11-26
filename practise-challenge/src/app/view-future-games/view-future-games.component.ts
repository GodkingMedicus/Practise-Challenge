import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-future-games',
  templateUrl: './view-future-games.component.html',
  styleUrls: ['./view-future-games.component.css']
})
export class ViewFutureGamesComponent implements OnInit {

  failed: boolean;
  err: string;
  fixtures: Array<any>;

  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.GetFixtures();
  }

  GetFixtures() {
    this.dataService.getFutureFixtures().subscribe({
      next: data => {
        this.fixtures = data;
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  passFixture(item) {
    this.dataService.passFixture = item;
    console.log(item)
  }

  deleteFixture(item) {
    this.dataService.deleteFixture(item).then()
    .catch((err) => {
      this.failed = true;
      this.err = err['status'];
    });
  }
}
