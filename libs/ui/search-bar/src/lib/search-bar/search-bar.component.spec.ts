import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
	let component: SearchBarComponent;
	let fixture: ComponentFixture<SearchBarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchBarComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBarComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create load elements', () => {
		const buttonElement = fixture.debugElement.nativeElement.querySelector('button');
		const inputElement = fixture.debugElement.nativeElement.querySelector('input');
		component.placeholder = 'my placeholer';

		fixture.detectChanges();

		expect(buttonElement).toBeTruthy();
		expect(inputElement.placeholder).toEqual(component.placeholder);
	});


	it('should create load elements', fakeAsync(() => {
		let inputElement = fixture.debugElement.nativeElement.querySelector('input');
		inputElement.value = 'new value';
		inputElement.dispatchEvent(new Event('input'));

		let emittedValue: string;
		component.keywordChange
			.subscribe((value: string) => emittedValue = value);

		fixture.detectChanges();
		tick();

		expect(inputElement.value).toEqual('new value');
		expect(emittedValue).toEqual(inputElement.Value);
	}));

});
