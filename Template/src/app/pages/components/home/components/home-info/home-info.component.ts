import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from './../shared/home.service';

@Component({
  selector: 'pic-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  startUrl: string = 'data:image/jpeg;base64,'
  url: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getImagemHome().subscribe(dadoImagem => {
      console.log(dadoImagem);

      this.url = `${this.startUrl}${dadoImagem.imagem}`
    })
  }

  openLoading(): void {
    this.homeService.loadingEventHome.next(true);
  };

}
