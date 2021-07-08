import { Component, OnInit } from '@angular/core';

import { HeaderService } from './shared/header.service';

@Component({
  selector: 'pic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  emitirSearch(): void{
    this.headerService.searchEvent.next(true);
  };

  emitirRecentes(): void{
    this.headerService.recentEvent.next(true);
  };

}
