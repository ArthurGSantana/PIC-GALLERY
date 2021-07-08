import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { HomeService } from './shared/home.service';

@Injectable({ providedIn: 'root'})
export class HomeResolver implements Resolve<Observable<any>>{

    constructor(
      private homeService: HomeService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.homeService.getImagemHome();
    };
}
