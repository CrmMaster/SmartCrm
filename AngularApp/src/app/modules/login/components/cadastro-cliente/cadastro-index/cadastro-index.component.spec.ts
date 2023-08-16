import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIndexComponent } from './cadastro-index.component';

describe('CadastroIndexComponent', () => {
  let component: CadastroIndexComponent;
  let fixture: ComponentFixture<CadastroIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroIndexComponent]
    });
    fixture = TestBed.createComponent(CadastroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
