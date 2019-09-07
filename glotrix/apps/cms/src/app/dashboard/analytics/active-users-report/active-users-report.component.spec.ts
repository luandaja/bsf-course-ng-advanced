import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersReportComponent } from './active-users-report.component';

describe('ActiveUsersReportComponent', () => {
  let component: ActiveUsersReportComponent;
  let fixture: ComponentFixture<ActiveUsersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUsersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
