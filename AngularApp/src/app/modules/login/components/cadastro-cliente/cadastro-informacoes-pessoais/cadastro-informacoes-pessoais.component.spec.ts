import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInformacoesPessoaisComponent } from './cadastro-informacoes-pessoais.component';

describe('CadastroInformacoesPessoaisComponent', () => {
  let component: CadastroInformacoesPessoaisComponent;
  let fixture: ComponentFixture<CadastroInformacoesPessoaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroInformacoesPessoaisComponent]
    });
    fixture = TestBed.createComponent(CadastroInformacoesPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
