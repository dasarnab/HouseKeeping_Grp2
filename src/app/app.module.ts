import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RightSideDivComponent } from './right-side-div/right-side-div.component';
import { CalculateButtonComponent } from './calculate-button/calculate-button.component';
import { SuccessComponent } from './success/success.component';
import { TopLeftDivComponent } from './top-left-div/top-left-div.component';
import { LeftDivComponent } from './left-div/left-div.component';
import { BottomLeftDivComponent } from './bottom-left-div/bottom-left-div.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RightSideDivComponent,
    CalculateButtonComponent,
    SuccessComponent,
    TopLeftDivComponent,
    LeftDivComponent,
    BottomLeftDivComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
