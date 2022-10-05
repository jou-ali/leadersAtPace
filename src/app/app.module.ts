import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EmbedComponent } from './embed/embed.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
