import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { FormsModule } from '@angular/forms';

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;
	let inputElement: HTMLInputElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CounterComponent],
			imports: [FormsModule],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.debugElement.componentInstance;
		inputElement = fixture.debugElement.nativeElement.querySelector('input');
	});

	it('should create', () => {
		let substractButtonElement = fixture.debugElement.nativeElement.querySelector('button.btn.btn-counter.corner-left');
		let addButtonElement = fixture.debugElement.nativeElement.querySelector('button.btn.btn-counter.corner-right');

		expect(component).toBeTruthy();
		expect(substractButtonElement).toBeTruthy();
		expect(addButtonElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
	});

	it('should add button call add method', () => {
		spyOn(component, 'add');
		let addButton = fixture.debugElement.nativeElement.querySelector('button.btn.btn-counter.corner-right');
		addButton.click();

		fixture.whenStable().then(() => {
			expect(component.add).toHaveBeenCalled();
		});
	});

	it('should substract button call substract method', () => {
		spyOn(component, 'substract');
		let substractButton = fixture.debugElement.nativeElement.querySelector('button.btn.btn-counter.corner-left');
		substractButton.click();

		fixture.whenStable().then(() => {
			expect(component.substract).toHaveBeenCalled();
		});
	});

	it('should start counter on one', fakeAsync(() => {
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		tick();
		expect(inputElement.value).toContain(1);
	}));

	it('should increment in one when add button is clicked', fakeAsync(() => {
		let emiittedCounter: number;
		component.counterChange.subscribe((counter: number) => emiittedCounter = counter);

		component.add();
		fixture.detectChanges();
		tick();

		expect(inputElement.value).toContain(2);
		expect(emiittedCounter).toEqual(2);
	}));


	it('should decrement in one when substract button is clicked', fakeAsync(() => {
		let emiittedCounter: number;
		component.counterChange.subscribe((counter: number) => emiittedCounter = counter);
		component.counter = 5;

		component.substract();
		fixture.detectChanges();
		tick();

		expect(inputElement.value).toContain(4);
		expect(emiittedCounter).toEqual(4);
	}));

	it('should remain in one when current value is one and substract button is clicked', fakeAsync(() => {
		component.counter = 1;
		component.substract();
		fixture.detectChanges();
		tick();
		expect(inputElement.value).toContain(1);
	}));

});
