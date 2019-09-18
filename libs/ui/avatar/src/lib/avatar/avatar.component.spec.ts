import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
	let component: AvatarComponent;
	let fixture: ComponentFixture<AvatarComponent>;
	let imageElement: HTMLImageElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AvatarComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AvatarComponent);
		component = fixture.debugElement.componentInstance;
		imageElement = fixture.debugElement.nativeElement.querySelector('img');
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('load component with sent values', () => {
		component.height = 10;
		component.width = 10;
		component.source = "imageUrl";

		fixture.detectChanges();

		expect(imageElement.src).toContain(component.source);
		expect(imageElement.width).toEqual(component.width);
		expect(imageElement.height).toEqual(component.height);
	});

	it('should load component with default values', () => {
		const defaultImg = 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg';
		const defaultValue = 30;

		fixture.detectChanges();

		expect(imageElement.src).toEqual(defaultImg);
		expect(imageElement.width).toEqual(defaultValue);
		expect(imageElement.height).toEqual(defaultValue);
	});

});
