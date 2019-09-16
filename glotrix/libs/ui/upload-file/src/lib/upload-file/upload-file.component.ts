import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @Output() fileLoaded = new EventEmitter<File>();

  constructor() { }

  fileProgress(fileInput: any) {
    this.fileLoaded.emit(<File>fileInput.target.files[0]);
  }

  ngOnInit() {
  }

}
