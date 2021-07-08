import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelGaleriaModule } from './../painel-galeria/painel-galeria.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { MaterialModule } from './../../../material-module.module';
import { HeaderAddComponent } from './components/header-add/header-add.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { AddImagemComponent } from './add-imagem.component';
import { ConfirmacaoModalComponent } from './../../../shared/modais/confirmacaoModal/confirmacao-modal.component';
import { DuvidaModalComponent } from './../../../shared/modais/duvidaModal/duvidaModal.component';
import { LoadingModalModule } from './../../../shared/modais/loadingModal/loadingModel.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    PainelGaleriaModule,
    ReactiveFormsModule,
    LoadingModalModule

  ],
  declarations: [
    AddImagemComponent,
    HeaderAddComponent,
    CardAddComponent,
    ConfirmacaoModalComponent,
    DuvidaModalComponent
  ],
})
export class AddImagemModule { }
