import { Injectable } from '@angular/core';
import { Observable, Subject, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  isVisible: Observable<string>;

  private visibleSubject: Subject<string>;
  constructor() {
    this.visibleSubject = new Subject<string>();
    this.isVisible =  this.visibleSubject.asObservable();
  }

  makeVisible(visibility: string) {
    // console.log("jnsjvcnds");
    this.visibleSubject.next(visibility);
  }
}
