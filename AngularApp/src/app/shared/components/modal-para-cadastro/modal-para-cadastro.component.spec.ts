import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParaCadastroComponent } from './modal-para-cadastro.component';

describe('ModalParaCadastroComponent', () => {
  let component: ModalParaCadastroComponent;
  let fixture: ComponentFixture<ModalParaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalParaCadastroComponent]
    });
    fixture = TestBed.createComponent(ModalParaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
