import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.css']
})
export class CadastroImovelComponent {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;
  constructor(private _formBuilder: FormBuilder) {}
}
