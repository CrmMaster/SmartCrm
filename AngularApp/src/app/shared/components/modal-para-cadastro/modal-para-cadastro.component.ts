import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-para-cadastro',
  templateUrl: './modal-para-cadastro.component.html',
  styleUrls: ['./modal-para-cadastro.component.css']
})
export class ModalParaCadastroComponent {
constructor(
  public dialogRef: DialogRef<ModalParaCadastroComponent>,
   
){}


cancelar() : void{
  this.dialogRef.close();
}

}
