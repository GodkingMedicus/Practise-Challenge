import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFutureGamesComponent } from './view-future-games.component';

describe('ViewFutureGamesComponent', () => {
  let component: ViewFutureGamesComponent;
  let fixture: ComponentFixture<ViewFutureGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFutureGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFutureGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
