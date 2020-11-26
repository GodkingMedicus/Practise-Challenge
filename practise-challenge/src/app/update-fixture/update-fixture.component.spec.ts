import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFixtureComponent } from './update-fixture.component';

describe('UpdateFixtureComponent', () => {
  let component: UpdateFixtureComponent;
  let fixture: ComponentFixture<UpdateFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
