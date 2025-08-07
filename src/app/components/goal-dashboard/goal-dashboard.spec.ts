import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDashboard } from './goal-dashboard';

describe('GoalDashboard', () => {
  let component: GoalDashboard;
  let fixture: ComponentFixture<GoalDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
