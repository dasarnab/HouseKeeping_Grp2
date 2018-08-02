import {NgModule} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

 import { NavComponent } from './nav/nav.component';
 import { RightSideDivComponent } from './right-side-div/right-side-div.component';
 import { CalculateButtonComponent } from './calculate-button/calculate-button.component';
 import { SuccessComponent } from './success/success.component';
 import { TopLeftDivComponent } from './top-left-div/top-left-div.component';
 import { LeftDivComponent } from './left-div/left-div.component';
 import { BottomLeftDivComponent } from './bottom-left-div/bottom-left-div.component';
 import { LoginComponent } from './login/login.component';
 import { HouseKeepingComponent } from './house-keeping/house-keeping.component';

const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'housekeeping',component:HouseKeepingComponent}
];

@NgModule(
{
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
)
export class AppRoutingModule { }

export const routingComponents = [
    LoginComponent,
    HouseKeepingComponent,
    NavComponent,
    RightSideDivComponent,
    CalculateButtonComponent,
    SuccessComponent,
    TopLeftDivComponent,
    LeftDivComponent,
    BottomLeftDivComponent,
]