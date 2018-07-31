import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.css']
})
export class CalculateButtonComponent implements OnInit {

  constructor() { }

  public counter : number = 0;
    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    if(this.counter > 0){
    this.counter -= 1;
    }
    else{
      this.counter =0;
    }
  }

  ngOnInit() {
  }

}
