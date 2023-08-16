import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroEnderecoComponent } from './components/cadastro-cliente/cadastro-endereco/cadastro-endereco.component';
import { CadastroIndexComponent } from './components/cadastro-cliente/cadastro-index/cadastro-index.component';
import { CadastroInformacoesPessoaisComponent } from './components/cadastro-cliente/cadastro-informacoes-pessoais/cadastro-informacoes-pessoais.component';
import { CadastroPlanoComponent } from './components/cadastro-cliente/cadastro-plano/cadastro-plano.component';
import { ModalCadastroComponent } from './components/cadastro-cliente/modal-cadastro/modal-cadastro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginIndexComponent } from './components/login-index/login-index.component';
import { FinalizarCadastroComponent } from './components/cadastro-cliente/finalizar-cadastro/finalizar-cadastro.component';

@NgModule({
  declarations: [
    LoginIndexComponent,
    FormLoginComponent,
    CadastroIndexComponent,
    ModalCadastroComponent,
    CadastroInformacoesPessoaisComponent,
    CadastroEnderecoComponent,
    CadastroPlanoComponent,
    FinalizarCadastroComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt'}],
})
export class LoginModule {}
