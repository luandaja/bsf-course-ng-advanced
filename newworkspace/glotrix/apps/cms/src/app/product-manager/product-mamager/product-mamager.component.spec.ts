import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMamagerComponent } from './product-mamager.component';

describe('ProductMamagerComponent', () => {
  let component: ProductMamagerComponent;
  let fixture: ComponentFixture<ProductMamagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMamagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMamagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
