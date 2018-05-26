import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SubtractorComponent } from './subtractor/subtractor.component';
import { AdderComponent } from './adder/adder.component';
import { CalculatorService } from './calculator.service';


@NgModule({
  declarations: [
    AppComponent,
    SubtractorComponent,
    AdderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
