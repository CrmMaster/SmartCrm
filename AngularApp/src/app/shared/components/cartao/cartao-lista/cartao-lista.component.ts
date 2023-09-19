import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CartaoDTO } from '../service/cartao/cartao.entity';

@Component({
  selector: 'app-cartao-lista',
  templateUrl: './cartao-lista.component.html',
  styleUrls: ['./cartao-lista.component.scss'],
})
export class CartaoListaComponent implements OnInit {
  public cartoes: CartaoDTO[] = [];


  constructor(
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.listar();

  }

  listar() {
  }

  navegate() {
  }
}
