import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-fixture',
  templateUrl: './add-fixture.component.html',
  styleUrls: ['./add-fixture.component.css']
})
export class AddFixtureComponent implements OnInit {
  failed: boolean;
  err: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addFixture(form) {
    console.log(form);
    //form.value['gameDate'] = form.value['date'].toISOString();
    this.dataService.addFixture(form.value).then()
      .catch((err) => {
        this.failed = true;
        this.err = err['status'];
      })
      .finally(() => {
        //this.router.navigate(['/dashboard']);
        //form.reset();
      });
  }

}
