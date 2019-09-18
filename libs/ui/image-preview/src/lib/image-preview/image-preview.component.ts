import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'gt-image-preview',
	templateUrl: './image-preview.component.html',
	styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnChanges {

	previewImageUrl: string | ArrayBuffer | null = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIw_mpEu3T-3kE-pvLWVRdUzaJDFsx-pwqnKBgML_RLrVldKUGg';

	@Input() image: string | File;

	constructor() { }

	ngOnChanges(): void {
		if (this.image instanceof File)
			this.getPreviewImageUrl(this.image as File);
		else
			this.previewImageUrl = this.image;
	}

	getPreviewImageUrl(file: File) {
		const mimeType = file.type;
		if (mimeType.match(/image\/*/) == null) {
			return null;
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (_event) => {
			this.previewImageUrl = reader.result;
		}
	}

}
