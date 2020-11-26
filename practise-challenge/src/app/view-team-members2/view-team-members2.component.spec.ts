import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamMembers2Component } from './view-team-members2.component';

describe('ViewTeamMembers2Component', () => {
  let component: ViewTeamMembers2Component;
  let fixture: ComponentFixture<ViewTeamMembers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeamMembers2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamMembers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
