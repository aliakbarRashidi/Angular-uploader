import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './upload/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '720px'
    });
  }
}
