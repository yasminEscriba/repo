import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';



export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion' ;
}
@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog(nro: Number) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        
        vista: nro
        
      },
   
   
    });
  }
}


@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
