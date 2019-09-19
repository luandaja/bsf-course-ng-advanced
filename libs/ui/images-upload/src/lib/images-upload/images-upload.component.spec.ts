import { UploadFileComponent } from './../../../../upload-file/src/lib/upload-file/upload-file.component';
import { Image } from '@glotrix/ui/images-upload';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesUploadComponent } from './images-upload.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ImagesUploadComponent', () => {
	let component: ImagesUploadComponent;
	let fixture: ComponentFixture<ImagesUploadComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImagesUploadComponent],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagesUploadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('should selected image and images be empty as defualt', () => {

		fixture.detectChanges();

		expect(component.images.length).toEqual(0);
		expect(component.imageSelected).toEqual(null);
	});

	it('should load the file on the list and raise image change event', () => {
		const newFile = new File([""], "filename");
		let emittedFiles: File[];
		component.imagesChange
			.subscribe((files: File[]) => emittedFiles = files);

		component.onFileLoaded(newFile);

		fixture.detectChanges();

		expect(component.images.length).toEqual(1);
		expect(component.images).toEqual([newFile]);
		expect(emittedFiles).toEqual([newFile]);
	});

	it('should set File as selectedImage', () => {
		const newFile = new File([""], "filename");

		component.previewImage(newFile);
		fixture.detectChanges();

		expect(component.imageSelected).toEqual(newFile);
	});

	it('should set image url as selectedImage', () => {
		const image: Image = { name: 'image', url: 'url.com' };

		component.previewImage(image);
		fixture.detectChanges();

		expect(component.imageSelected).toEqual(image.url);
	});

	it('should remove image from list', () => {
		const index = 1;
		component.images = [
			new File([""], "filename"),
			{ name: 'image', url: 'url.com' },
		];
		const removedImage = component.images[index];

		let emittedFiles: File[];
		component.imagesChange
			.subscribe((files: File[]) => emittedFiles = files);

		component.removeImage(removedImage, index);
		fixture.detectChanges();

		expect(component.images.length).toEqual(1);
		expect(component.images).not.toContain(removedImage);
		expect(emittedFiles).not.toContain(component.images);
	});

	it('should clean image selected when its removed', () => {
		component.images = [
			new File([""], "filename"),
			{ name: 'image', url: 'url.com' },
		];
		const index = 1;
		const removedImage = component.images[index];
		component.imageSelected = removedImage;

		component.removeImage(removedImage, index);
		fixture.detectChanges();

		expect(component.imageSelected).toBe(null);
	});

	// it('should call onFileLoaded event', () => {
	// 	spyOn(component, 'onFileLoaded');

	// 	let uploadFileComponent = fixture.debugElement.nativeElement.querySelector('gt-upload-file');

	// 	fixture.detectChanges();

	// 	uploadFileComponent.fileLoaded();

	// 	fixture.whenStable().then(() => {
	// 		expect(component.onFileLoaded).toHaveBeenCalled();
	// 	});
	// });

});
