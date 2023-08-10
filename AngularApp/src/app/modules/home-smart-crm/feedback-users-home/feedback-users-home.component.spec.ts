import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackUsersHomeComponent } from './feedback-users-home.component';

describe('FeedbackUsersHomeComponent', () => {
  let component: FeedbackUsersHomeComponent;
  let fixture: ComponentFixture<FeedbackUsersHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackUsersHomeComponent]
    });
    fixture = TestBed.createComponent(FeedbackUsersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
