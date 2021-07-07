import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ImagesModel } from './../models/images.model';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImagesRepository {

  rota: string = 'imagens';
  url: string = `${environment.apiURL}${this.rota}`;

  constructor(private http: HttpClient){}

  getImagensPainel(): Observable<ImagesModel[]>{
    return this.http.get<ImagesModel[]>(this.url);
  };

}
