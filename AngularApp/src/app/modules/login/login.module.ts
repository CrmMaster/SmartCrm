import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginIndexComponent } from './login-index/login-index.component';



@NgModule({
  declarations: [
    LoginIndexComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class LoginModule { }
