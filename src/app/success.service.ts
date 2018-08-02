import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  public isVisible ="";

  private visibleSubject: Subject<string>;
  constructor() { 
    // this.visibleSubject = new Subject<string>();
    this.isVisible = "hidden";
  }

  makeVisible(){
    //console.log("jnsjvcnds");
    
    this.isVisible = "visible";
  }
}
