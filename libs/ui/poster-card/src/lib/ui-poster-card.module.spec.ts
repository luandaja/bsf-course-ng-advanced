import { async, TestBed } from '@angular/core/testing';
import { UiPosterCardModule } from './ui-poster-card.module';

describe('UiPosterCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPosterCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiPosterCardModule).toBeDefined();
  });
});
