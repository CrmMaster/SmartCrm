import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finalizar-cadastro',
  templateUrl: './finalizar-cadastro.component.html',
  styleUrls: ['./finalizar-cadastro.component.css'],
})
export class FinalizarCadastroComponent {
  public form!: FormGroup;
  public hide = true;
  public hideConfirme = true;

  @Input() formLogin!: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      email: '',
      senha: '',
      confirmSenha: '',
    });
  }
}
