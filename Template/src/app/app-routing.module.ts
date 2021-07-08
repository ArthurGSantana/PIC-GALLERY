import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PainelGaleriaResolver } from './pages/components/painel-galeria/painel-galeria.resolver';
import { AddImagemComponent } from './pages/components/add-imagem/add-imagem.component';
import { PainelGaleriaComponent } from './pages/components/painel-galeria/painel-galeria.component';
import { HomeComponent } from './pages/components/home/home.component';
import { HomeResolver } from './pages/components/home/home.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { imagemHome: HomeResolver },
  },
  {
     path: 'painel-galeria',
     component: PainelGaleriaComponent,
     resolve: { imagens: PainelGaleriaResolver }
  },
  { path: 'add-imagem', component: AddImagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
