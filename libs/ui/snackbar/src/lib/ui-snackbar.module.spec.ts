import { async, TestBed } from '@angular/core/testing';
import { UiSnackbarModule } from './ui-snackbar.module';

describe('UiSnackbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSnackbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSnackbarModule).toBeDefined();
  });
});
