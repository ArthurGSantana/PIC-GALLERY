import { Observable, Subject } from 'rxjs';
import { ImagesModel } from 'src/app/shared/models/images.model';
import { Injectable } from '@angular/core';

import { ImagesRepository } from './../../../../shared/repository/images.repository';

@Injectable({
  providedIn: 'root'
})
export class AddImagemService {

  loadingEventAdd: Subject<boolean> = new Subject<boolean>();

  constructor(
    private imagemRepository: ImagesRepository
  ) { }

  criarNovaimagem(imagem: ImagesModel): Observable<ImagesModel>{
    return this.imagemRepository.postImagemPainel(imagem);
  };

}
