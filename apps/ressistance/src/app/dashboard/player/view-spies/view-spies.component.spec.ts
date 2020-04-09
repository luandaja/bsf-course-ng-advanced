import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpiesComponent } from './view-spies.component';

describe('ViewSpiesComponent', () => {
  let component: ViewSpiesComponent;
  let fixture: ComponentFixture<ViewSpiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
