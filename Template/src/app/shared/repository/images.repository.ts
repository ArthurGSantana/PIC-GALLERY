import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { ImagesModel } from './../models/images.model';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImagesRepository {

  rota: string = 'imagens';
  url: string = `${environment.apiURL}${this.rota}`;

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getImagensPainel(): Observable<ImagesModel[]>{
    return this.http.get<ImagesModel[]>(this.url);
  };

  postImagemPainel(imagem: ImagesModel): Observable<ImagesModel>{
    //console.log(imagem);
    return this.http.post<ImagesModel>(this.url, JSON.stringify(imagem), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };

  getImagemHome(): Observable<any>{
    return this.http.get<any>(`${environment.apiURL}imagemHome`);
  };

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
