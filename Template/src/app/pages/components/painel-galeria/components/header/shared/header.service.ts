import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchEvent: Subject<boolean> = new Subject<boolean>();
  recentEvent: Subject<boolean> = new Subject<boolean>();

  constructor() { }

}
