import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RightSideDivComponent } from './right-side-div/right-side-div.component';
import { CalculateButtonComponent } from './calculate-button/calculate-button.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RightSideDivComponent,
    CalculateButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
