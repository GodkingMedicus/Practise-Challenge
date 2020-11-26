import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Fixture } from '../models/fixture';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-fixture',
  templateUrl: './update-fixture.component.html',
  styleUrls: ['./update-fixture.component.css']
})
export class UpdateFixtureComponent implements OnInit {

  failed: boolean;
  err: string;
  form: FormGroup;

  data:Fixture;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.passFixture;
    console.log(this.data);

    this.form = new FormGroup({
      'venue': new FormControl(this.data.venue),
      'gameDate': new FormControl(this.data.gameDate),
      'userId': new FormControl(this.data.userId),
      'fees': new FormControl(this.data.fees)
    })
  }

  updateFixture() {
    
    this.data.userId = this.form.value.userId;
    this.data.fees = this.form.value.fees;
    this.dataService.updateFixture(this.data).then()
    .catch((err) => {
      this.failed = true;
      this.err = err['status'];
    });
  }

}
