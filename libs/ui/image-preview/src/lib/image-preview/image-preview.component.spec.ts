import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewComponent } from './image-preview.component';

describe('ImagePreviewComponent', () => {
	let component: ImagePreviewComponent;
	let fixture: ComponentFixture<ImagePreviewComponent>;
	let imageElement: HTMLImageElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImagePreviewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagePreviewComponent);
		component = fixture.componentInstance;
		imageElement = fixture.debugElement.nativeElement.querySelector('img');
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should load with default image', () => {
		const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIw_mpEu3T-3kE-pvLWVRdUzaJDFsx-pwqnKBgML_RLrVldKUGg';

		fixture.detectChanges();

		expect(imageElement.src).toEqual(defaultImg);
	});

	it('should load sent imageUrl', () => {
		component.previewImageUrl = "imageUrl";

		fixture.detectChanges();

		expect(imageElement.src).toContain(component.previewImageUrl);
	});

});
