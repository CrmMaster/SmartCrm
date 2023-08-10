import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePlansHomeComponent } from './price-plans-home.component';

describe('PricePlansHomeComponent', () => {
  let component: PricePlansHomeComponent;
  let fixture: ComponentFixture<PricePlansHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricePlansHomeComponent]
    });
    fixture = TestBed.createComponent(PricePlansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
