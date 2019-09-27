import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardsComponent } from './board-cards.component';

describe('BoardCardsComponent', () => {
  let component: BoardCardsComponent;
  let fixture: ComponentFixture<BoardCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
