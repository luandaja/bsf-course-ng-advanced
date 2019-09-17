import { async, TestBed } from '@angular/core/testing';
import { UiCarouselModule } from './ui-carousel.module';

describe('UiCarouselModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCarouselModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCarouselModule).toBeDefined();
  });
});
