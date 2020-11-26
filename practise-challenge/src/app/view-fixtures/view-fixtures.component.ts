import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-fixtures',
  templateUrl: './view-fixtures.component.html',
  styleUrls: ['./view-fixtures.component.css']
})
export class ViewFixturesComponent implements OnInit {

  failed: boolean;
  err: string;
  fixtures: Array<any>;

  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.GetFixtures();
  }

  GetFixtures() {
    this.dataService.getFixtures().subscribe({
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
