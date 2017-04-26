import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MyRedditComponent } from './my-reddit/my-reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    MyRedditComponent
  ],
  imports: [
  CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
