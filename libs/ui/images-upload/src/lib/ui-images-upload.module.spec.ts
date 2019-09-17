import { async, TestBed } from '@angular/core/testing';
import { UiImagesUploadModule } from './ui-images-upload.module';

describe('UiImagesUploadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiImagesUploadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiImagesUploadModule).toBeDefined();
  });
});
