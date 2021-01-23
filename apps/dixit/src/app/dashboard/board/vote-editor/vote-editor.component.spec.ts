import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteEditorComponent } from './vote-editor.component';

describe('VoteEditorComponent', () => {
  let component: VoteEditorComponent;
  let fixture: ComponentFixture<VoteEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
