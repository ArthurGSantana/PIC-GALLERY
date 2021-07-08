import { Observable } from 'rxjs';
import { ImagesRepository } from '../../../../shared/repository/images.repository';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  loadingEventHome: Subject<boolean> = new Subject<boolean>();

  constructor(
    private imagemRepository: ImagesRepository
  ) { }

  getImagemHome(): Observable<any> {
    return this.imagemRepository.getImagemHome();
  };

}
