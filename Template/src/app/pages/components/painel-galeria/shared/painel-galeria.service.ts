import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ImagesRepository } from './../../../../shared/repository/images.repository';
import { ImagesModel } from 'src/app/shared/models/images.model';

@Injectable({
  providedIn: 'root'
})
export class PainelGaleriaService {

  constructor (
    private imagemRepository: ImagesRepository
  ) { }

  getImagensPainel(): Observable<ImagesModel[]>{
    return this.imagemRepository.getImagensPainel();
  };


}