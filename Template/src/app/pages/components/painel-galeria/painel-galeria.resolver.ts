import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PainelGaleriaService } from './shared/painel-galeria.service';
import { ImagesModel } from '../../../shared/models/images.model';

@Injectable({ providedIn: 'root'})
export class PainelGaleriaResolver implements Resolve<Observable<ImagesModel[]>>{

    constructor(
      private painelService: PainelGaleriaService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ImagesModel[]> {
        return this.painelService.getImagensPainel();
    };
}
