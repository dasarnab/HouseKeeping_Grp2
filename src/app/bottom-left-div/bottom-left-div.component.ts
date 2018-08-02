import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SuccessService } from '../success.service';

@Component({
  selector: 'app-bottom-left-div',
  templateUrl: './bottom-left-div.component.html',
  styleUrls: ['./bottom-left-div.component.css'],
})
export class BottomLeftDivComponent implements OnInit {

  constructor(private _submitService : SuccessService) { }
  public submitVisibility="";
  ngOnInit() {
    this._submitService.isVisible.subscribe(data => this.submitVisibility = data);
  }
  submit(){
    //console.log("hi");
    this._submitService.makeVisible("visible");
  
  }



}
