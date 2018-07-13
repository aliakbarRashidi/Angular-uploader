import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './upload.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  declarations: [DialogComponent],
  exports: [
    DialogComponent,
    MatButtonModule
  ],
  entryComponents: [DialogComponent],
  providers: [UploadService]
})
export class UploadModule { }
