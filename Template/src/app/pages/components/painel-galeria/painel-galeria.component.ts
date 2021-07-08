import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { PainelGaleriaService } from './shared/painel-galeria.service';
import { WelcomeModalComponent } from './../../../shared/modais/welcomeModal/welcomeModal.component';
import { HeaderService } from './components/header/shared/header.service';
import { ImagesModel } from './../../../shared/models/images.model';

@Component({
  selector: 'pic-painel-galeria',
  templateUrl: './painel-galeria.component.html',
  styleUrls: ['./painel-galeria.component.scss']
})
export class PainelGaleriaComponent implements OnInit, AfterViewInit, OnDestroy {

  imagens: ImagesModel[];
  searchControl: boolean = false;
  filtroImagens: string = '';

  searchSubscribe: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private painelService: PainelGaleriaService,
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.imagens = this.activatedRoute.snapshot.data['imagens'];
    this.imagens.reverse();

    this.openDialog();

    this.painelService.debounce
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.filtroImagens = valor;
      });
  }

  ngAfterViewInit(): void {
    this.searchSubscribe = this.headerService.searchEvent.subscribe( res => {
      this.searchControl = res;
    });
  }

  ngOnDestroy(): void {
    //this.searchSubscribe.unsubscribe();
    //this.painelService.debounce.unsubscribe();
  }

  openDialog(): void{
    this.dialog.open(WelcomeModalComponent);
  };

}
