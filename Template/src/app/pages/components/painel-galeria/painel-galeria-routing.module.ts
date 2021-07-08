import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelGaleriaComponent } from './painel-galeria.component';
import { PainelGaleriaResolver } from './painel-galeria.resolver';


const routes: Routes = [
    {
      path: '',
      component: PainelGaleriaComponent,
      resolve: { imagens: PainelGaleriaResolver }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class PainelGaleriaRoutingModule { }

