import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkHomeComponent } from './resume-work-home.component';

describe('ResumeWorkHomeComponent', () => {
  let component: ResumeWorkHomeComponent;
  let fixture: ComponentFixture<ResumeWorkHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeWorkHomeComponent]
    });
    fixture = TestBed.createComponent(ResumeWorkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
