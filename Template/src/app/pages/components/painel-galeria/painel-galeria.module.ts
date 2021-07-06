import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from './../../../material-module.module';
import { PainelGaleriaComponent } from './painel-galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
      PainelGaleriaComponent,
      HeaderComponent,
      FooterComponent
    ],
    exports: [

    ],
    imports: [
      CommonModule,
      MaterialModule
    ]
})
export class PainelGaleriaModule { }
