import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CardContatosComponent } from './components/card-contatos/card-contatos.component';
import { CadastroImovelComponent } from './components/cadastro-imovel/cadastro-imovel.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { GraficoAreaComponent } from './widgets/grafico-area/grafico-area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { IndexCadastroClienteComponent } from './components/index-cadastro-cliente/index-cadastro-cliente.component';
import { CadastroClienteComponent } from '../modules/cadastro-cliente/cadastro-cliente.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContatosComponent } from '../modules/contatos/contatos.component';
import {DialogModule} from '@angular/cdk/dialog';
import { ModalParaCadastroComponent } from './components/modal-para-cadastro/modal-para-cadastro.component';
import { CadastroContatoComponent } from './components/cadastro-contato/cadastro-contato.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';







@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardContatosComponent,
    CadastroImovelComponent,
    GraficoAreaComponent,
    IndexCadastroClienteComponent,
    CadastroClienteComponent,
    ContatosComponent,
    ModalParaCadastroComponent,
    CadastroContatoComponent
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTooltipModule,
    DialogModule,
    NgxMaskDirective,
     NgxMaskPipe
    
    
    

  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraficoAreaComponent,
    CadastroClienteComponent,
    CardContatosComponent,
    ContatosComponent
    
  ]
})
export class SharedModule { }
