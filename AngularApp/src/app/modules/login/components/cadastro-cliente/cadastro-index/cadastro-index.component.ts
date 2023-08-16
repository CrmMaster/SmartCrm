import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-index',
  templateUrl: './cadastro-index.component.html',
  styleUrls: ['./cadastro-index.component.css'],
})
export class CadastroIndexComponent {
  firstFormGroup = this.builder.group({
    firstCtrl: [''],
  });
  secondFormGroup = this.builder.group({
    secondCtrl: [''],
  });

  constructor(private readonly builder: FormBuilder) {}
}
