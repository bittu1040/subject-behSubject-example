import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { DataPassingService } from './data-passing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component, Comp3Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [DataPassingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
