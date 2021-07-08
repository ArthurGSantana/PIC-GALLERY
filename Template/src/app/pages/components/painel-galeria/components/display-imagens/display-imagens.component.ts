import { Subscription } from 'rxjs';
import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { HeaderService } from './../header/shared/header.service';
import { ImagesModel } from 'src/app/shared/models/images.model';

@Component({
  selector: 'pic-display-imagens',
  templateUrl: './display-imagens.component.html',
  styleUrls: ['./display-imagens.component.scss']
})
export class DisplayImagensComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() arrayImagens: ImagesModel[];

  recentSubscribe: Subscription = new Subscription();

  constructor(
    private headerService: HeaderService
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

}
