import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCityComponent} from "./list-city/list-city.component";
import {EditCityComponent} from "./edit-city/edit-city.component";

const routes: Routes = [
  {
    path:'list',
    component:ListCityComponent
  },
  {
  path:'edit/:id',
    component:EditCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
