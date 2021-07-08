import { AddImagemService } from './shared/add-imagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pic-add-imagem',
  templateUrl: './add-imagem.component.html',
  styleUrls: ['./add-imagem.component.scss']
})
export class AddImagemComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private addImagemService: AddImagemService
  ) { }

  ngOnInit() {
    this.addImagemService.loadingEventAdd.subscribe(res => {
      this.loading = res;
    });
  }

}
