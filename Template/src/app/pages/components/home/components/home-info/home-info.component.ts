import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'pic-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  startUrl: string = 'data:image/jpeg;base64,'
  url: string;
  dadosImagem: any;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dadosImagem = this.activatedRoute.snapshot.data['imagemHome'];
    this.url = `${this.startUrl}${this.dadosImagem.imagem}`;
  }

  openLoading(): void {
    this.homeService.loadingEventHome.next(true);
  };

}
