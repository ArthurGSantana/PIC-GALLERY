import { AddImagemService } from './../../shared/add-imagem.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DuvidaModalComponent } from './../../../../../shared/modais/duvidaModal/duvidaModal.component';

@Component({
  selector: 'pic-header-add',
  templateUrl: './header-add.component.html',
  styleUrls: ['./header-add.component.scss']
})
export class HeaderAddComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private addImagemService: AddImagemService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(DuvidaModalComponent);
  };

  openLoading(): void{
    this.addImagemService.loadingEventAdd.next(true);
  };

}
