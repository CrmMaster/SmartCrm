import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsStrategiesHomeComponent } from './contents-strategies-home.component';

describe('ContentsStrategiesHomeComponent', () => {
  let component: ContentsStrategiesHomeComponent;
  let fixture: ComponentFixture<ContentsStrategiesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentsStrategiesHomeComponent]
    });
    fixture = TestBed.createComponent(ContentsStrategiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
