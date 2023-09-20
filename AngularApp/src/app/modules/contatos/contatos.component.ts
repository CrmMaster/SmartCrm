import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { ModalParaCadastroComponent } from 'src/app/shared/components/modal-para-cadastro/modal-para-cadastro.component';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

constructor(
  public dialog: Dialog
  ){}


  adicionarContato(): void {
    const dialogRef = this.dialog.open<string>(ModalParaCadastroComponent, {
      width: '250px',
      
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}


