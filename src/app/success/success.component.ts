import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SuccessService } from '../success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  
})
export class SuccessComponent implements OnInit {


  constructor(private _success : SuccessService) { }
  public visible = this._success.isVisible;
  ngOnInit() {
    this.visible = this._success.isVisible;
  }

  ngOnChanges(change :SimpleChanges ){
    console.log("hi");
    this.visible = this._success.isVisible;


  }

}
