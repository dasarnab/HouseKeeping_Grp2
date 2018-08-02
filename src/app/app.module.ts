import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule,routingComponents} from './app-routing.module';


import { AppComponent } from './app.component';

 import { SuccessService } from './success.service';




@NgModule({
  declarations: [
    AppComponent,

    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SuccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
