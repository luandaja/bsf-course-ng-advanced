import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsSelectorComponent } from './avatars-selector.component';

describe('AvatarsSelectorComponent', () => {
  let component: AvatarsSelectorComponent;
  let fixture: ComponentFixture<AvatarsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
