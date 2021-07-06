import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PainelGaleriaComponent } from './pages/components/painel-galeria/painel-galeria.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'painel-galeria', component: PainelGaleriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
