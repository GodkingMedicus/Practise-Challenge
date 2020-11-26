import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TeamMember } from '../models/teamMember';

@Component({
  selector: 'app-view-team-members',
  templateUrl: './view-team-members.component.html',
  styleUrls: ['./view-team-members.component.css']
})
export class ViewTeamMembersComponent implements OnInit {
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

  authMember(form, auth: string) {

    this.dataService.updateMember(form, auth).then()
    .catch((err) => {
      this.failed = true;
      this.err = err['status'];
    });
  }

}
