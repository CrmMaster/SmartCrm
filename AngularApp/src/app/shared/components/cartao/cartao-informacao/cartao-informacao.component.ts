import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-informacao',
  templateUrl: './cartao-informacao.component.html',
  styleUrls: ['./cartao-informacao.component.scss'],
})
export class CartaoInformacaoComponent implements OnInit {
  public codigoCartao: string = '';

  @Input() form: FormGroup = new FormGroup({});

  get creditCard() {
    return this.form.get('numeroCartao');
  }

  get dataValidade() {
    return this.form.get('dataValidade');
  }

  get codigoSeguranca() {
    return this.form.get('codigoSeguranca');
  }

  get tipoCartao() {
    return this.form.get('tipoCartao');
  }

  get apelido() {
    return this.form.get('apelido');
  }

  constructor() {}

  ngOnInit(): void {}

  alteraCartao($event: any) {
    this.codigoCartao = $event;
  }
}
