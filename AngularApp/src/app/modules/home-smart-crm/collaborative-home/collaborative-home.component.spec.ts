import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeHomeComponent } from './collaborative-home.component';

describe('CollaborativeHomeComponent', () => {
  let component: CollaborativeHomeComponent;
  let fixture: ComponentFixture<CollaborativeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborativeHomeComponent]
    });
    fixture = TestBed.createComponent(CollaborativeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
