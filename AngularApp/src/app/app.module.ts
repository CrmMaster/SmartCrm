import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { HomeSmartCrmModule } from './modules/home-smart-crm/home-smart-crm.module';
import { ContatosComponent } from './modules/contatos/contatos.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeSmartCrmModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    NgxMaskDirective, NgxMaskPipe
    
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
