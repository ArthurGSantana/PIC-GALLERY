import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ImagesRepository } from './../../../../shared/repository/images.repository';
import { ImagesModel } from 'src/app/shared/models/images.model';

@Injectable({
  providedIn: 'root'
})
export class PainelGaleriaService {

  debounce: Subject<string> = new Subject<string>();
  abrirImagemEvent: BehaviorSubject<ImagesModel> = new BehaviorSubject<ImagesModel>(null);

  constructor (
    private imagemRepository: ImagesRepository
  ) { }

  getImagensPainel(): Observable<ImagesModel[]>{
    return this.imagemRepository.getImagensPainel();
  };

  updateImagemPainel(imagem: ImagesModel): Observable<ImagesModel>{
    return this.imagemRepository.updateImagemPainel(imagem);
  };

}
