import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCartaoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = isCartaoVencido(control.value);
    return valid ? null : { valid: !valid };
  }
}

export function isCartaoVencido(vencimento: string): boolean {

  if ( !vencimento ) return false;
  if ( vencimento == '' ) return false;

  console.log(vencimento.length < 4)

  let anoValidadeCartao = vencimento.substring(2,vencimento.length)
  let mesValidadeCartao = vencimento.substring(0,2)

  let novaData = '20' + anoValidadeCartao + '-' + mesValidadeCartao + '-' + '02'

  let validateCartao = new Date(novaData);
  let dataAtual = new Date();

  validateCartao = new Date(validateCartao.getFullYear(), validateCartao.getMonth() + 1, 0);

  if ( validateCartao < dataAtual ) return false;

  return true;

}
