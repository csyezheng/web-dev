import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard.component';
import {MajorBullComponent} from './major-bull.component';
import {BullComponent} from './bull.component';
import {NeuterComponent} from './neuter.component';
import {BearComponent} from './bear.component';
import {MajorBearComponent} from './major-bear.component';
import {NewsDetailComponent} from './news-detail.component';


import { AlertModule } from 'ngx-bootstrap';
import {NewsService} from "./news.service";
import {MajorBullService} from "./major-bull.service";
import {BullService} from "./bull.service";
import {NeuterService} from "./neuter.service";
import {BearService} from "./bear.service";
import {MajorBearService} from "./major-bear.service";
import {NewsDetailService} from './news-detail.service';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsDetailComponent,
    MajorBullComponent,
    BullComponent,
    NeuterComponent,
    BearComponent,
    MajorBearComponent,
  ],
  providers: [ NewsService, MajorBullService, BullService, NeuterService, NeuterService, BearService, MajorBearService, NewsDetailService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
