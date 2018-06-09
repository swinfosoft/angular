import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,
    NgxSpinnerModule,FormsModule,
    Ng2Webstorage,BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 8000}),
  ],
  exports:[CommonModule,
    HttpClientModule, Ng2Webstorage,
    NgxSpinnerModule,FormsModule,
    BrowserAnimationsModule,AlertModule
  ],
  declarations: []
})
export class SharedModule { }
