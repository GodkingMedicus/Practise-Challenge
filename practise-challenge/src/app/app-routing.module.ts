import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFixtureComponent } from './add-fixture/add-fixture.component';
import { UpdateFixtureComponent } from './update-fixture/update-fixture.component';
import { ViewFixturesComponent } from './view-fixtures/view-fixtures.component';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';

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
        expectedRole: '1'
      }
  },
  {
    path: 'updateFixture',
    component: UpdateFixtureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
