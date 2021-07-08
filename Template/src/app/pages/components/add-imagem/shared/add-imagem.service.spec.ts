/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddImagemService } from './add-imagem.service';

describe('Service: AddImagem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddImagemService]
    });
  });

  it('should ...', inject([AddImagemService], (service: AddImagemService) => {
    expect(service).toBeTruthy();
  }));
});
