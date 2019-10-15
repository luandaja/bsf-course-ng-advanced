import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVoteComponent } from './mission-vote.component';

describe('MissionVoteComponent', () => {
  let component: MissionVoteComponent;
  let fixture: ComponentFixture<MissionVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
