import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-contatos',
  templateUrl: './card-contatos.component.html',
  styleUrls: ['./card-contatos.component.css']
})
export class CardContatosComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  

  constructor(private _formBuilder: FormBuilder) {}
}
