import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { CadastroClienteComponent } from '../modules/cadastro-cliente/cadastro-cliente.component';
import { CadastroImovelComponent } from './components/cadastro-imovel/cadastro-imovel.component';
import { CardContatosComponent } from './components/card-contatos/card-contatos.component';
import { CartaoBandeiraComponent } from './components/cartao/cartao-bandeira/cartao-bandeira.component';
import { CartaoCardComponent } from './components/cartao/cartao-card/cartao-card.component';
import { CartaoIndexComponent } from './components/cartao/cartao-index/cartao-index.component';
import { CartaoInformacaoComponent } from './components/cartao/cartao-informacao/cartao-informacao.component';
import { CartaoListaComponent } from './components/cartao/cartao-lista/cartao-lista.component';
import { CartaoNovoComponent } from './components/cartao/cartao-novo/cartao-novo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexCadastroClienteComponent } from './components/index-cadastro-cliente/index-cadastro-cliente.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficoAreaComponent } from './widgets/grafico-area/grafico-area.component';





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
    CartaoCardComponent,
    CartaoIndexComponent,
    CartaoInformacaoComponent,
    CartaoListaComponent,
    CartaoNovoComponent,
    CartaoBandeiraComponent
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
    

  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraficoAreaComponent,
    CadastroClienteComponent,
    CardContatosComponent
    
  ]
})
export class SharedModule { }
