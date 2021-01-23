import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDayComponent } from './week-days.component';

describe('WeekDayComponent', () => {
	let component: WeekDayComponent;
	let fixture: ComponentFixture<WeekDayComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeekDayComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeekDayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
