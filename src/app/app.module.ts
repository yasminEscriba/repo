import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent, DialogDataExampleDialog } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { Globals } from './globals';
import {Routes} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog,
    RouletteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogDataExampleDialog
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
