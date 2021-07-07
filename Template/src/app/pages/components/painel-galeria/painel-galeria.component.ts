import { ImagesModel } from './../../../shared/models/images.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PainelGaleriaService } from './shared/painel-galeria.service';
import { WelcomeModalComponent } from './../../../shared/modais/welcomeModal/welcomeModal.component';

@Component({
  selector: 'pic-painel-galeria',
  templateUrl: './painel-galeria.component.html',
  styleUrls: ['./painel-galeria.component.scss']
})
export class PainelGaleriaComponent implements OnInit {

  imagens: ImagesModel[];

  constructor(
    public dialog: MatDialog,
    private painelService: PainelGaleriaService
  ) { }

  ngOnInit(): void {
    this.painelService.getImagensPainel().subscribe(dados => {
      this.imagens = dados;
      console.log(dados);

    });

    this.openDialog();
  }

  openDialog(): void{
    this.dialog.open(WelcomeModalComponent);
  };

}
