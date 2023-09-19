import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoIndexComponent } from './cartao-index.component';

describe('CartaoIndexComponent', () => {
  let component: CartaoIndexComponent;
  let fixture: ComponentFixture<CartaoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
