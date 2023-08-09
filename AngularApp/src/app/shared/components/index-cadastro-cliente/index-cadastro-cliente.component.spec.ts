import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCadastroClienteComponent } from './index-cadastro-cliente.component';

describe('IndexCadastroClienteComponent', () => {
  let component: IndexCadastroClienteComponent;
  let fixture: ComponentFixture<IndexCadastroClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCadastroClienteComponent]
    });
    fixture = TestBed.createComponent(IndexCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
