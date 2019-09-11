import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'gt-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnChanges {

  previewImageUrl: string | ArrayBuffer | null = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIw_mpEu3T-3kE-pvLWVRdUzaJDFsx-pwqnKBgML_RLrVldKUGg';

  @Input() file: File;
  @Input() height = 200;

  constructor() { }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.file)
      this.getPreviewImageUrl();
  }

  getPreviewImageUrl() {
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.previewImageUrl = reader.result;
    }
  }
}
