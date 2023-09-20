import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { HomeSmartCrmModule } from './modules/home-smart-crm/home-smart-crm.module';
import { ContatosComponent } from './modules/contatos/contatos.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeSmartCrmModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
