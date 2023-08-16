import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroComponent } from '../cadastro-cliente/modal-cadastro/modal-cadastro.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  public form!: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  cadastroModal() {
    this.dialog.open(ModalCadastroComponent, {
      minWidth: '70%',
    });
  }
}
