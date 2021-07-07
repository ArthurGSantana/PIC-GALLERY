/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainelGaleriaService } from './painel-galeria.service';

describe('Service: PainelGaleria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainelGaleriaService]
    });
  });

  it('should ...', inject([PainelGaleriaService], (service: PainelGaleriaService) => {
    expect(service).toBeTruthy();
  }));
});
