import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSumaryComponent } from './order-sumary.component';

describe('OrderSumaryComponent', () => {
  let component: OrderSumaryComponent;
  let fixture: ComponentFixture<OrderSumaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSumaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
