import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from '../../../app-routing.module';
import { MaterialModule } from './../../../material-module.module';
import { PainelGaleriaComponent } from './painel-galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeModalComponent } from './../../../shared/modais/welcomeModal/welcomeModal.component';
import { PhotoComponent } from './components/photo/photo.component';
import { DisplayImagensComponent } from './components/display-imagens/display-imagens.component';
import { FiltrarImagens } from './filtra-imagens.pipe';

@NgModule({
    declarations: [
      PainelGaleriaComponent,
      HeaderComponent,
      FooterComponent,
      WelcomeModalComponent,
      PhotoComponent,
      DisplayImagensComponent,
      FiltrarImagens
    ],
    exports: [
      FooterComponent
    ],
    imports: [
      CommonModule,
      MaterialModule,
      AppRoutingModule
    ]
})
export class PainelGaleriaModule { }
