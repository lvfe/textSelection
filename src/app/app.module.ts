import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { IntextComponent } from './intext/intext.component';
import { ErrorComponent } from './error/error.component';
import { NotificationComponent } from './notification/notification.component';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SafeHtmlPipe } from './safe.pipe'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import{ FormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    IntextComponent,
    ErrorComponent,
    NotificationComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  entryComponents: [IntextComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
