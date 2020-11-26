import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-team-members2',
  templateUrl: './view-team-members2.component.html',
  styleUrls: ['./view-team-members2.component.css']
})
export class ViewTeamMembers2Component implements OnInit {
  failed: boolean;
  err: string;
  teamMembers: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.getTeamMembers();
  }

  getTeamMembers(){
    this.dataService.getTeamMembers().subscribe({
      next: data => {
        this.teamMembers = data;
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  authMember(item) {
    this.authorizeMember(item, "Authorized")
  }

  rejectMember(item) {
    this.authorizeMember(item, "Rejected")
  }

  authorizeMember(form, auth: string) {
    this.dataService.updateMember(form, auth).then()
    .catch((err) => {
      this.failed = true;
      this.err = err['status'];
    });
  }
}
