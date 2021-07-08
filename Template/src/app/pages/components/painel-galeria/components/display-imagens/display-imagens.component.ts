import { Subscription } from 'rxjs';
import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VisualizarImagemComponent } from './../visualizar-imagem/visualizar-imagem.component';
import { HeaderService } from './../header/shared/header.service';
import { ImagesModel } from 'src/app/shared/models/images.model';
import { PainelGaleriaService } from './../../shared/painel-galeria.service';

@Component({
  selector: 'pic-display-imagens',
  templateUrl: './display-imagens.component.html',
  styleUrls: ['./display-imagens.component.scss']
})
export class DisplayImagensComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() arrayImagens: ImagesModel[];

  recentSubscribe: Subscription = new Subscription();

  constructor(
    private headerService: HeaderService,
    private dialog: MatDialog,
    private painelGaleriaService: PainelGaleriaService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.recentSubscribe = this.headerService.recentEvent.subscribe( res => {
      this.arrayImagens.reverse();
    });
  }

  ngOnDestroy(): void {
    this.recentSubscribe.unsubscribe();
  }

  openImage(img: ImagesModel): void {
    this.painelGaleriaService.abrirImagemEvent.next(img);
    this.dialog.open(VisualizarImagemComponent);
  };

}
