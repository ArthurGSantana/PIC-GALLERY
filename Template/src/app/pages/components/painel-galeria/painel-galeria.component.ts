import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WelcomeModalComponent } from './../../../shared/modais/welcomeModal/welcomeModal.component';

@Component({
  selector: 'pic-painel-galeria',
  templateUrl: './painel-galeria.component.html',
  styleUrls: ['./painel-galeria.component.scss']
})
export class PainelGaleriaComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void{
    this.dialog.open(WelcomeModalComponent)
  }

}
