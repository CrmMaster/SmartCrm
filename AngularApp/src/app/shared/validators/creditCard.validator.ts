import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function creditCardValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = isCreditCard(control.value);
    return valid ? null : { valid: !valid };
  }
}

export function isCreditCard(creditCard: string): boolean {

  if (!creditCard) return false;
  if (creditCard == '') return false;

  creditCard = creditCard.replace(/\D/g, '');

  if (
    creditCard == '0000000000000000' ||
    creditCard == '1111111111111111' ||
    creditCard == '2222222222222222' ||
    creditCard == '3333333333333333' ||
    creditCard == '4444444444444444' ||
    creditCard == '5555555555555555' ||
    creditCard == '6666666666666666' ||
    creditCard == '7777777777777777' ||
    creditCard == '8888888888888888' ||
    creditCard == '9999999999999999'
  )
    return false;

  let sum = 0;
  let shouldDouble = false;

  // loop through values starting at the rightmost side

  for (let i = creditCard.length - 1; i >= 0; i--) {
    let digit = parseInt(creditCard.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) == 0;

}
