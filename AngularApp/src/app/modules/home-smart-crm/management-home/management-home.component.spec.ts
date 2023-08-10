import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHomeComponent } from './management-home.component';

describe('ManagementHomeComponent', () => {
  let component: ManagementHomeComponent;
  let fixture: ComponentFixture<ManagementHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementHomeComponent]
    });
    fixture = TestBed.createComponent(ManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
