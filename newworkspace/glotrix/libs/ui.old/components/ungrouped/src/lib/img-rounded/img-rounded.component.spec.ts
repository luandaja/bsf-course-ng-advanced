import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRoundedComponent } from './img-rounded.component';

describe('ImgRoundedComponent', () => {
  let component: ImgRoundedComponent;
  let fixture: ComponentFixture<ImgRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
