import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategories } from '../category';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.component.html',
  styleUrls: ['./house-keeping.component.css']
  })
export class HouseKeepingComponent implements OnInit {

  constructor(private _category: CategoryService) { }
  public counter = 0;
  serviceCategory: ICategories;
  serviceId = '4';
  unitprice = 0;
  totalPrice = 0;
  parentCategories: ICategories [];

  subCategories: ICategories [];
  ngOnInit() {
     this._category.getCategories('2')
       .subscribe((data: ICategories[]) => this.parentCategories = data);
  }


  increment() {
    this.counter++;
    this.totalPrice = this.unitprice * this.counter;
  }

  decrement() {
    this.counter > 0 ? this.counter-- : this.counter = 0;
    this.totalPrice = this.unitprice * this.counter;
  }

  callType(event: any) {
    if (this.serviceId !==  event.target.value) {
      this.serviceId = event.target.value;
      this.counter = 0;
      this.totalPrice = 0;
      this.unitprice = 0;
      console.log('house' + this.serviceId);
      this._category.getCategories(this.serviceId)
      .subscribe((sub: ICategories[]) => this.subCategories = sub);
    }
  }

  showPrice(event: any) {
    this.unitprice = event.target.value;
    this.totalPrice = this.unitprice;
    this.counter = 1;
    console.log('price' + this.unitprice);

  }

}
