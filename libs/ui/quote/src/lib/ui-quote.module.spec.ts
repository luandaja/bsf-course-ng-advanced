import { async, TestBed } from '@angular/core/testing';
import { UiQuoteModule } from './ui-quote.module';

describe('UiQuoteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiQuoteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiQuoteModule).toBeDefined();
  });
});
