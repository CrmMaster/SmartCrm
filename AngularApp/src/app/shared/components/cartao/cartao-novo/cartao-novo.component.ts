import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { creditCardValidator } from 'src/app/shared/validators/creditCard.validator';
import { validateCartaoValidator } from 'src/app/shared/validators/validateCartao.validator';

const URL_BACK = '/conta/minha-conta/meus-dados/formas-pagamentos';

@Component({
  selector: 'app-cartao-novo',
  templateUrl: './cartao-novo.component.html',
  styleUrls: ['./cartao-novo.component.scss'],
})
export class CartaoNovoComponent implements OnInit {
  public snapshot: string = '';
  public form: FormGroup = new FormGroup({});
  public codigoCartao: string = '';
  public numeroCartao: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public modal: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly builder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      endereco: this.builder.group({
        cep: ['', [Validators.required]],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        uf: ['', Validators.required],
      }),
      infoCartao: this.builder.group({
        numeroCartao: ['', [Validators.required, creditCardValidator()]],
        dataValidade: ['', [Validators.required, validateCartaoValidator()]],
        codigoSeguranca: ['', Validators.required],
        tipoCartao: ['', Validators.required],
        apelido: ['', Validators.required],
      }),
    });
  }

  salvar() {}

  voltar() {
    this.router.navigate([URL_BACK]);
  }

  alteraCartao($event: any) {
    this.codigoCartao = $event;
  }
}
