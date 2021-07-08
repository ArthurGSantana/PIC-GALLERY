import { Pipe, PipeTransform } from '@angular/core';

import { ImagesModel } from 'src/app/shared/models/images.model';

@Pipe({ name: 'filtrarImagens'})
export class FiltrarImagens implements PipeTransform {

    transform(imagens: ImagesModel[], descriptionQuery: string) {
      descriptionQuery = descriptionQuery
        .trim()
        .toLowerCase();

      if(descriptionQuery) {
          return imagens.filter(imagem =>
              imagem.descricao.toLowerCase().includes(descriptionQuery)
          );
      } else {
          return imagens;
      };
    };
}
