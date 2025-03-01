import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<boolean>(false);
  isOpen$ = this.modalState.asObservable();

  open() {
    this.modalState.next(true);
  }

  close() {
    this.modalState.next(false);
  }
}
