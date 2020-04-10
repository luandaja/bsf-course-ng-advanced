import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopComponent } from './eshop.component';

describe('EshopComponent', () => {
  let component: EshopComponent;
  let fixture: ComponentFixture<EshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
