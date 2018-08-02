import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SuccessService } from '../success.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  
})
export class SuccessComponent implements OnInit {

  public visible:Observable<string>;
  public param:string;

  constructor(private _success : SuccessService) {
   //this.visible = _success.isVisible
  //  this.visible.subscribe(data=>{
  //     this.param=data;
  //  })
    this.param="hidden";
  
   }
  
  ngOnInit() {
    this._success.isVisible.subscribe(data => this.param = data);
  }



}
