import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-plano',
  templateUrl: './cadastro-plano.component.html',
  styleUrls: ['./cadastro-plano.component.css']
})
export class CadastroPlanoComponent {
  public form!: FormGroup;

  @Input() formPlano!: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      plano:'',
      qntdUsuario:0,
    });
  }
}
