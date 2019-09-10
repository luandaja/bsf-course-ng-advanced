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

  // getPreviewImageUrl(fileData: File) {
  //   const mimeType = fileData.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return null;
  //   }
  //   const reader = new FileReader();
  //   reader.readAsDataURL(fileData);
  //   reader.onload = (_event) => {
  //     this.previewImageUrl.emit(reader.result);
  //   }
  // }
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.fileData);
  //   // this.http.post('url/to/your/api', formData)
  //   //   .subscribe(res => {
  //   //     console.log(res);
  //   //     this.uploadedFilePath = res.data.filePath;
  //   //     alert('SUCCESS !!');
  //   //   })
  // }
  ngOnInit() {
  }

}
