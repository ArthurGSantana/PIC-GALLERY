import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AddImagemService } from './shared/add-imagem.service';

@Component({
  selector: 'pic-add-imagem',
  templateUrl: './add-imagem.component.html',
  styleUrls: ['./add-imagem.component.scss']
})
export class AddImagemComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  loadingSubscription: Subscription = new Subscription();

  constructor(
    private addImagemService: AddImagemService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.addImagemService.loadingEventAdd.subscribe(res => {
      this.loading = res;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
