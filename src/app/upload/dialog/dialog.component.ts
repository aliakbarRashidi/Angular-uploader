import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('file') file;
  addedFile;
  percent = 0;
  loaded = 0;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    this.addedFile = this.file.nativeElement.files[0];
    console.log('Added File:', this.addedFile);
  }

  upload() {
    const progress = this.uploadService.upload(this.addedFile);

    progress.subscribe((result) => {
      this.percent = result.percent;
      this.loaded = result.loaded;
    });
  }

}
