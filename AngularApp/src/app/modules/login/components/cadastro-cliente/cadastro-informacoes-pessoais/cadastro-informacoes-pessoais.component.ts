import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-informacoes-pessoais',
  templateUrl: './cadastro-informacoes-pessoais.component.html',
  styleUrls: ['./cadastro-informacoes-pessoais.component.css'],
})
export class CadastroInformacoesPessoaisComponent {
  public form!: FormGroup;

  @Input() formInformacoesPessoais!: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      nome:'',
      sobrenome: '',
      dataNascimento: '',
      celular: '',
      cpfCnpj: '',
    })
  }
}
