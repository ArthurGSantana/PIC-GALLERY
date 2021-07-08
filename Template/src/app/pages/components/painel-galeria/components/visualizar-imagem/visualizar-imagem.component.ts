import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { ImagesModel } from './../../../../../shared/models/images.model';
import { PainelGaleriaService } from './../../shared/painel-galeria.service';

@Component({
  selector: 'app-visualizar-imagem',
  templateUrl: './visualizar-imagem.component.html',
  styleUrls: ['./visualizar-imagem.component.scss']
})
export class VisualizarImagemComponent implements OnInit, OnDestroy, AfterViewInit {

  imagemVisualizada: ImagesModel;
  imagemSubscription: Subscription = new Subscription();
  newImagemSubscription: Subscription = new Subscription();

  pressLike: boolean = false;
  iconPress: string = 'favorite';
  icon: string = 'favorite_border';

  constructor(
    private painelGaleriaService: PainelGaleriaService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.imagemSubscription = this.painelGaleriaService.abrirImagemEvent.subscribe( img => {
      this.imagemVisualizada = img;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.visualizacao();
    this.newImagemSubscription = this.painelGaleriaService.updateImagemPainel(this.imagemVisualizada)
      .subscribe(
        res => { this.imagemVisualizada = res; },
        err => { },
        () => { this.newImagemSubscription.unsubscribe() }
      );

    this.imagemSubscription.unsubscribe();
  }

  visualizacao(): void{
    this.imagemVisualizada.visualizacao += 1;
  }

  likePress(): void {
    if(!this.pressLike){
      this.imagemVisualizada.curtidas += 1;
      this.pressLike = true;
    };
  };

}
