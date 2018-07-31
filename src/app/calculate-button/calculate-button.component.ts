import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.css']
})
export class CalculateButtonComponent implements OnInit {

  constructor() { }

  public counter : number = 0;
  @Output() public counterEvent = new EventEmitter();
  increment(){
    this.counter += 1;
    this.counterEvent.emit(this.counter);
  }
  
  decrement(){
    if(this.counter > 0){
    this.counter -= 1;
    }
    else{
      this.counter =0;
    }
    this.counterEvent.emit(this.counter);
  }

  ngOnInit() {
  }

}
