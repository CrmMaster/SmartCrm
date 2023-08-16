import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css'],
})
export class CadastroEnderecoComponent {
  public form!: FormGroup;

  @Input() formEndereco!: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      uf: '',
      cidade: '',
      cep: 0,
      endereco: '',
      bairro: '',
      complemento: '',
      numero: 0,
    });
  }
}
