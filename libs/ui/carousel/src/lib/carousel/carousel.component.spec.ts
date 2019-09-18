import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
	let component: CarouselComponent;
	let fixture: ComponentFixture<CarouselComponent>;
	let imageElement: HTMLImageElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CarouselComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarouselComponent);
		component = fixture.componentInstance;
		imageElement = fixture.debugElement.nativeElement.querySelector('img');
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
