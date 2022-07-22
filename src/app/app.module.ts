import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCityComponent } from './list-city/list-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { DeleteCityComponent } from './delete-city/delete-city.component';
import { CreateCityComponent } from './create-city/create-city.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    EditCityComponent,
    DeleteCityComponent,
    CreateCityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
