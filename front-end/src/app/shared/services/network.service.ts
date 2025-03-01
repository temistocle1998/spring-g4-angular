import { Injectable } from '@angular/core';
import { merge, fromEvent, map, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  isOnline$ = merge(
    fromEvent(window, 'online').pipe(map(() => true)),
    fromEvent(window, 'offline').pipe(map(() => false)),
    new Observable((sub: Observer<boolean>) => {
      sub.next(navigator.onLine);
      sub.complete();
    }),
  );

  constructor() {}
}