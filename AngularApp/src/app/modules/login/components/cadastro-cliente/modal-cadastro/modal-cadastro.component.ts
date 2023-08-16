import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css'],
})
export class ModalCadastroComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogRef: MatDialogRef<ModalCadastroComponent>
  ) {}
}
