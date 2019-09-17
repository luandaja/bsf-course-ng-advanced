import { async, TestBed } from '@angular/core/testing';
import { UiFormsModule } from './ui-forms.module';

describe('UiFormsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiFormsModule).toBeDefined();
  });
});
