import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoBandeiraComponent } from './cartao-bandeira.component';

describe('CartaoBandeiraComponent', () => {
  let component: CartaoBandeiraComponent;
  let fixture: ComponentFixture<CartaoBandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoBandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
