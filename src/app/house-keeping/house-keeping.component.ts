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
  mainCategory: ICategories;
  serviceId = '4';
  unitprice = 0;
  parentCategories: ICategories [];

  subCategories: ICategories [];
  ngOnInit() {
     this._category.getCategories('2')
       .subscribe((data: ICategories[]) => this.parentCategories = data);
  }


  increment() {
    this.counter++;
  }

  decrement() {
    this.counter > 0 ? this.counter-- : this.counter = 0;
  }

  callType(event: any) {
    this.serviceId = event.target.value;
    console.log('house' + this.serviceId);

    this._category.getCategories(this.serviceId)
    .subscribe((sub: ICategories[]) => this.subCategories = sub);
  }

}
