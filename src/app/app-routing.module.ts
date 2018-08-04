import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

 import { NavComponent } from './nav/nav.component';
 import { SuccessComponent } from './success/success.component';
 import { LeftDivComponent } from './left-div/left-div.component';

 import { LoginComponent } from './login/login.component';
 import { HouseKeepingComponent } from './house-keeping/house-keeping.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'housekeeping', component: HouseKeepingComponent}
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
    SuccessComponent,
    LeftDivComponent,

];
