import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoInformacaoComponent } from './cartao-informacao.component';

describe('CartaoInformacaoComponent', () => {
  let component: CartaoInformacaoComponent;
  let fixture: ComponentFixture<CartaoInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
