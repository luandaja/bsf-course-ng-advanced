import { async, TestBed } from '@angular/core/testing';
import { UiImagePreviewModule } from './ui-image-preview.module';

describe('UiImagePreviewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiImagePreviewModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiImagePreviewModule).toBeDefined();
  });
});
