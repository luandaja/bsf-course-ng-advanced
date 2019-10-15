import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBoardComponent } from './table-board.component';

describe('TableBoardComponent', () => {
  let component: TableBoardComponent;
  let fixture: ComponentFixture<TableBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
