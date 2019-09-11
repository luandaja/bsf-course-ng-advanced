import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent implements OnInit {
  fileSelected: File = null;
  files: File[] = [];
  @Output() filesLoaded = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() { }

  onFileLoaded(fileLoaded: File) {
    this.files.push(fileLoaded);
    this.filesLoaded.emit(this.files);
  }

  previewImage(file: File) {
    this.fileSelected = file;
  }

  removeImage(fileRemoved: File) {
    this.files = this.files.filter(file => file !== fileRemoved);
    if (fileRemoved === this.fileSelected) {
      this.fileSelected = null;
    }
    this.filesLoaded.emit(this.files);
  }

}
