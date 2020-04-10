import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionPlanComponent } from './nutrition-plan.component';

describe('NutritionPlanComponent', () => {
  let component: NutritionPlanComponent;
  let fixture: ComponentFixture<NutritionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
