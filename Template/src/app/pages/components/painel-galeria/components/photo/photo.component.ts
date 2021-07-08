import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ImagesModel } from './../../../../../shared/models/images.model';

@Component({
  selector: 'pic-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnChanges {

  @Input() dadosImagem: ImagesModel;
  url: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dadosImagem?.imagem?.startsWith("data")) {
      this.url = this.dadosImagem.imagem;
    } else {
      this.url = `data:image/png;base64,${this.dadosImagem.imagem}`;
    };
  };
}
