import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule} from 'ngx-bootstrap/typeahead';


import { AppComponent } from './app.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab9Component } from './lab9/lab9.component';
import { Lab3Component } from './lab3/lab3.component';


@NgModule({
  declarations: [
    AppComponent,
    Lab1Component,
    Lab2Component,
    Lab9Component,
    Lab3Component
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
	BsDropdownModule.forRoot(),
	HttpClientModule,
  FormsModule,
  TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
