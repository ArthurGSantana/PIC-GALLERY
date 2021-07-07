import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelGaleriaModule } from './pages/components/painel-galeria/painel-galeria.module';
import { HomeModule } from './pages/components/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PainelGaleriaModule,
    HomeModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
