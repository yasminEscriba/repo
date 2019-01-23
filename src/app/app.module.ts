import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent, DialogDataExampleDialog } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogDataExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
