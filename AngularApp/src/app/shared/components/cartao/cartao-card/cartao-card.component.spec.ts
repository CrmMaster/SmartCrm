import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCardComponent } from './cartao-card.component';

describe('CartaoCardComponent', () => {
  let component: CartaoCardComponent;
  let fixture: ComponentFixture<CartaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
