import { async, TestBed } from '@angular/core/testing';
import { UiSpinnerModule } from './ui-spinner.module';

describe('UiSpinnerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSpinnerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSpinnerModule).toBeDefined();
  });
});
