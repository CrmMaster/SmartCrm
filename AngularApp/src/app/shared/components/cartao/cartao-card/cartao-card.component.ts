import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaoDTO } from '../service/cartao/cartao.entity';

@Component({
  selector: 'app-cartao-card',
  templateUrl: './cartao-card.component.html',
  styleUrls: ['./cartao-card.component.scss'],
})
export class CartaoCardComponent implements OnInit {
  @Input() cartao: CartaoDTO = {};

  constructor(
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  editarCartao(idCartao: string) {
    this.router.navigate([
      `/conta/minha-conta/meus-dados/formas-pagamentos/cartao/editar/${idCartao}`,
    ]);
  }

  removerCartao(cartao: CartaoDTO) {}

  definirCartaoPadrao(cartao: CartaoDTO) {}
}
