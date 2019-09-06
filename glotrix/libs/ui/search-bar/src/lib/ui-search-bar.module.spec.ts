import { async, TestBed } from '@angular/core/testing';
import { UiSearchBarModule } from './ui-search-bar.module';

describe('UiSearchBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSearchBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSearchBarModule).toBeDefined();
  });
});
