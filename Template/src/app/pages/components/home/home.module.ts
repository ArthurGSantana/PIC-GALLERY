import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { HomeComponent } from './home.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { MaterialModule } from './../../../material-module.module';
import { HomeCadastroComponent } from './components/home-cadastro/home-cadastro.component';
import { LoadingModalModule } from './../../../shared/modais/loadingModal/loadingModel.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModalModule
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeInfoComponent,
    HomeCadastroComponent
  ]
})
export class HomeModule { }
