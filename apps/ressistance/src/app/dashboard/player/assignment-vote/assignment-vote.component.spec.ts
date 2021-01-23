import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentVoteComponent } from './assignment-vote.component';

describe('AssignmentVoteComponent', () => {
  let component: AssignmentVoteComponent;
  let fixture: ComponentFixture<AssignmentVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
