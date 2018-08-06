import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategories } from '../category';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.component.html',
  styleUrls: ['./house-keeping.component.css']
  })
export class HouseKeepingComponent implements OnInit {

  constructor(private _category: CategoryService) {

   }
  public counter = 0;
  serviceCategory: ICategories;
  serviceSubCategory: ICategories;
  serviceId = 2;
  unitprice = 0;
  totalPrice = 0;
  request: string;
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

  callType(event: ICategories) {
    if (this.serviceId !==  event.serviceTypeId) {
      this.serviceCategory = event;
      this.serviceId = this.serviceCategory.serviceTypeId;
      this.counter = 0;
      this.totalPrice = 0;
      this.unitprice = 0;
      this.request = this.serviceCategory.serviceTypeDesc;
      // console.log('house' + this.serviceCategory.serviceTypeId.toString());
      this._category.getCategories(this.serviceCategory.serviceTypeId.toString())
      .subscribe((sub: ICategories[]) => this.subCategories = sub);
    }
    // console.log(event);
  }

  showPrice(event: ICategories) {
    this.serviceSubCategory = event;
    console.log(this.serviceSubCategory);
    this.unitprice = event.price;
    this.totalPrice = this.unitprice;
    this.counter = 1;
    this.request = event.serviceTypeDesc;
    console.log('price' + this.unitprice);

  }

}
