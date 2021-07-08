import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  loadingSubscription: Subscription = new Subscription();

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.homeService.loadingEventHome.subscribe(res => {
      this.loading = res;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
