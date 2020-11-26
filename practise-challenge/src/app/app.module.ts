import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AddFixtureComponent } from './add-fixture/add-fixture.component';
import { ViewFixturesComponent } from './view-fixtures/view-fixtures.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateFixtureComponent } from './update-fixture/update-fixture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewTeamMembers2Component } from './view-team-members2/view-team-members2.component';
import { ViewFutureGamesComponent } from './view-future-games/view-future-games.component';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('Authorization'));
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddFixtureComponent,
    ViewFixturesComponent,
    UpdateFixtureComponent,
    ViewTeamMembers2Component,
    ViewFutureGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001']
      }
    }),
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
