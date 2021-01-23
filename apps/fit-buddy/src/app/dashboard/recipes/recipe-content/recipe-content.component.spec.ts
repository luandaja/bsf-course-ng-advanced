import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContentComponent } from './recipe-content.component';

describe('RecipeContentComponent', () => {
  let component: RecipeContentComponent;
  let fixture: ComponentFixture<RecipeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
