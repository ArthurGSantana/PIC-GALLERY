import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddImagemComponent } from './pages/components/add-imagem/add-imagem.component';
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
     loadChildren: () => import('./pages/components/painel-galeria/painel-galeria.module')
      .then((m) => m.PainelGaleriaModule)
  },
  { path: 'add-imagem', component: AddImagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
