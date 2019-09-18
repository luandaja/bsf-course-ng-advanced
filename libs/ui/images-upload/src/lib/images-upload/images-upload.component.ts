import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Image } from '../Image';

@Component({
	selector: 'gt-images-upload',
	templateUrl: './images-upload.component.html',
	styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent implements OnChanges {
	imageSelected: Image | string = null;

	@Output() imagesChange = new EventEmitter<Array<File | Image>>();
	@Input() images: Image[] | File[] = [];

	constructor() { }

	ngOnChanges() {
		console.log("ui component", this.images);
	}

	onFileLoaded(fileLoaded: File) {
		this.images.push(fileLoaded);
		this.imagesChange.emit(this.images);
	}

	previewImage(image: Image | File) {
		this.imageSelected = (image instanceof File) ? image : image.url;
	}

	removeImage(imageRemoved: Image | File, index: number) {
		this.images.splice(index, 1);
		if (imageRemoved === this.imageSelected) {
			this.imageSelected = null;
		}
		this.imagesChange.emit(this.images);
	}

}
