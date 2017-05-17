import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { CounterActions } from './store/actions';

import * as jQuery from 'jquery';
import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    ScheduleModule,
    NgReduxModule,
  ],
  providers: [
    CounterActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
