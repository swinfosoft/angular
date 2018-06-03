import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,HttpClientModule,
    NgxSpinnerModule,FormsModule,BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 8000}),
  ],
  exports:[CommonModule,
    HttpClientModule,
    NgxSpinnerModule,FormsModule,
    BrowserAnimationsModule,AlertModule
  ],
  declarations: []
})
export class SharedModule { }
