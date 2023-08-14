import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginIndexComponent } from './login-index/login-index.component';

@NgModule({
  declarations: [LoginIndexComponent, FormLoginComponent],
  imports: [CommonModule, MatCardModule, MatDividerModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
