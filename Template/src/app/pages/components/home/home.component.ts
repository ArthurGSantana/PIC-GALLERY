import { Component, OnInit } from '@angular/core';

import { HomeService } from './components/shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.loadingEventHome.subscribe(res => {
      this.loading = res;
    });
  }

}
