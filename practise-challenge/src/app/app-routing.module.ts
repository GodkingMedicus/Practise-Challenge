import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFixtureComponent } from './add-fixture/add-fixture.component';
import { UpdateFixtureComponent } from './update-fixture/update-fixture.component';
import { ViewFixturesComponent } from './view-fixtures/view-fixtures.component';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';
import { ViewTeamMembers2Component } from './view-team-members2/view-team-members2.component';

const routes: Routes = [

  {
    path: '',
    component: ViewFixturesComponent,
  },
  {
    path: 'addFixture',
    component: AddFixtureComponent,
    canActivate: [RoleGuard], 
      data: { 
        authorized: true
      }
  },
  {
    path: 'updateFixture',
    component: UpdateFixtureComponent,
  },
  {
    path: 'viewTeamMembers',
    component: ViewTeamMembers2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
