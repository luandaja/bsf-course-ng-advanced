import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
	let component: CarouselComponent;
	let fixture: ComponentFixture<CarouselComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CarouselComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarouselComponent);
		component = fixture.debugElement.componentInstance;
	});


	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('should get image id', () => {
		const id = 3;

		const imageId = component.getImageId(id);
		fixture.detectChanges();

		const expectedImageId = `${component.imagePrefix}${id}`;
		expect(imageId).toEqual(expectedImageId);
	});

	it('should set the endIndex', () => {
		component.images = ['imagew 1', 'image 2', 'image 3'];

		fixture.detectChanges();

		expect(component.endIndex).toEqual(2);
	});

	it('should get next image id when current index is not the last one of the list', () => {
		const currentIndex = 3;
		component.endIndex = 5;
		component.getImageId = jest.fn();

		component.getNextImageId(currentIndex);
		fixture.detectChanges();

		expect(component.getImageId).toHaveBeenCalledWith(4);
	});

	it('should get next image id when current index the last one of the list', () => {
		const currentIndex = 5;
		component.endIndex = 5;
		component.getImageId = jest.fn();

		component.getNextImageId(currentIndex);
		fixture.detectChanges();

		expect(component.getImageId).toHaveBeenCalledWith(0);
	});

	it('should get previous image id when current index is not the first one of the list', () => {
		const currentIndex = 3;
		component.endIndex = 5;
		component.getImageId = jest.fn();

		component.getPreviousImageId(currentIndex);
		fixture.detectChanges();

		expect(component.getImageId).toHaveBeenCalledWith(2);
	});

	it('should get next image id when current index the first one of the list', () => {
		const currentIndex = 0;
		component.endIndex = 5;
		component.getImageId = jest.fn();

		component.getPreviousImageId(currentIndex);
		fixture.detectChanges();

		expect(component.getImageId).toHaveBeenCalledWith(5);
	});
});
