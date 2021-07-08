import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddImagemService } from './../../shared/add-imagem.service';
import { ImagesModel } from 'src/app/shared/models/images.model';
import { ConfirmacaoModalComponent } from './../../../../../shared/modais/confirmacaoModal/confirmacao-modal.component';

@Component({
  selector: 'pic-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {

  imageForm: FormGroup;
  file: File;
  preview: string;

  imagem: ImagesModel = {
    descricao: '',
    curtidas: 1,
    visualizacao: 1,
    imagem: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private addImagemService: AddImagemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      descricao: ['', [Validators.required ,Validators.maxLength(300)]],
      file: ['', Validators.required]
    });
  }

  getFileImage(imgfile: File): void{
    this.file = imgfile;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = event.target.result;
      this.imagem.imagem = this.preview;
    };
    reader.readAsDataURL(imgfile);
  };

  openDialog(): void{
    const dialogRef = this.dialog.open(ConfirmacaoModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.cadastrarFotografia();
      };
    });
  };

  cadastrarFotografia(): void{
    this.imagem.descricao = this.imageForm.value.descricao;
    this.addImagemService.criarNovaimagem(this.imagem)
      .subscribe(
        res => {
          this.addImagemService.loadingEventAdd.next(true);
          this.router.navigate(['/painel-galeria']);
        }
      );
  };

}
