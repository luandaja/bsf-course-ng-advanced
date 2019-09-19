import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBannerComponent } from './welcome-banner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UiAvatarModule } from '@glotrix/ui/avatar';

describe('WelcomeBannerComponent', () => {
	let component: WelcomeBannerComponent;
	let fixture: ComponentFixture<WelcomeBannerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WelcomeBannerComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WelcomeBannerComponent);
		component = fixture.debugElement.componentInstance;

	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should match snapshot', () => {

		component.banner = {
			contentText: 'content', imageUrl: 'url',
			title: 'my title', upperText: 'my brand name'
		};
		fixture.detectChanges();

		expect(fixture).toMatchSnapshot();
	});

});
