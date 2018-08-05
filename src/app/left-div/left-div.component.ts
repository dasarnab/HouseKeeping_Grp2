import { Component, OnInit, Input } from '@angular/core';
import { SuccessService } from '../success.service';
@Component({
  selector: 'app-left-div',
  templateUrl: './left-div.component.html',
  styleUrls: ['./left-div.component.css']
})
export class LeftDivComponent implements OnInit {
  @Input() count: number;
  constructor(private _submitService: SuccessService) { }
  public submitVisibility = '';
  ngOnInit() {
    this._submitService.isVisible.subscribe(data => this.submitVisibility = data);
  }

  submit() {

    this._submitService.makeVisible('visible');
  }


}
