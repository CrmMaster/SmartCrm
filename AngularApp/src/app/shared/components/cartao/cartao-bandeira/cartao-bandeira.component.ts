import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cartao-bandeira',
  templateUrl: './cartao-bandeira.component.html',
  styleUrls: ['./cartao-bandeira.component.scss']
})
export class CartaoBandeiraComponent implements OnInit {

  _codigo!: string

  public diners = new RegExp('^3(?:0[0-5]|[68][0-9])[0-9]');
  public elo = new RegExp('^(50(67(0[78]|1[5789]|2[012456789]|3[01234569]|4[0-7]|53|7[4-8])|9(0(0[0-9]|1[34]|2[0-7]|3[0359]|4[01235678]|5[01235789]|6[0-9]|7[01346789]|8[01234789]|9[123479])|1(0[34568]|4[6-9]|5[1-8]|8[356789])|2(2[0-2]|5[78]|6[1-9]|7[0-9]|8[01235678]|90)|357|4(0[7-9]|1[0-9]|2[0-2]|31|5[7-9]|6[0-6]|84)|55[01]|636|7(2[2-9]|6[5-9])))|4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|6(27780|36368|5(0(0(3[12356789]|4[0-7]|7[78])|4(0[6-9]|1[0234]|2[2-9]|3[045789]|8[5-9]|9[0-9])|5(0[012346789]|1[0-9]|2[0-9]|3[0178]|5[2-9]|6[0-6]|7[7-9]|8[0-8]|9[1-8])|72[0-7]|9(0[1-9]|1[0-9]|2[0128]|3[89]|4[6-9]|5[0145]|6[235678]|71))|16(5[2-9]|6[0-9]|7[01456789])|50(0[0-9]|1[02345678]|36|5[1267]))))\\d{0,13}$');
  public hipercard = new RegExp('^606282|^3841(?:[0|4|6]{1})0');
  public mastercard = new RegExp('^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})');
  public visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  public american = new RegExp('^3[47]\\d{0,13}');
  public jcb = new RegExp('(?:3[0-9]{15}|(2131|1800)[0-9]{11})');

  @Input() set codigo(value: string) {
    if (this.elo.test(value)) {
      this.cartaoIconPath = 'elo';
    } else if (this.visa.test(value)) {
      this.cartaoIconPath = 'visa';
    } else if (this.mastercard.test(value)) {
      this.cartaoIconPath = 'mastercard';
    } else if (this.diners.test(value)) {
      this.cartaoIconPath = 'diners';
    } else if (this.hipercard.test(value)) {
      this.cartaoIconPath = 'hipercard';
    } else  if (this.american.test(value)) {
      this.cartaoIconPath = 'american';
    } else if (this.jcb.test(value)) {
      this.cartaoIconPath = 'jcb';
    } else {
      this.cartaoIconPath = 'desconhecida'
    }
      this._codigo = value;

      console.log( this.cartaoIconPath)
  }

  public cartaoIconPath!: string | null

  constructor() { }

  ngOnInit(): void { }

}
