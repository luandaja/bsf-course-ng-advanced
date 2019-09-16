import { async, TestBed } from '@angular/core/testing';
import { UiCounterModule } from './ui-counter.module';

describe('UiCounterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCounterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCounterModule).toBeDefined();
  });
});
