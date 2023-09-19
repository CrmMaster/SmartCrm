import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoNovoComponent } from './cartao-novo.component';

describe('CartaoNovoComponent', () => {
  let component: CartaoNovoComponent;
  let fixture: ComponentFixture<CartaoNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
