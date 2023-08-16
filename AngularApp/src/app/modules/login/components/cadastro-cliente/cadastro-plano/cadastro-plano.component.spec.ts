import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlanoComponent } from './cadastro-plano.component';

describe('CadastroPlanoComponent', () => {
  let component: CadastroPlanoComponent;
  let fixture: ComponentFixture<CadastroPlanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPlanoComponent]
    });
    fixture = TestBed.createComponent(CadastroPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});