import { async, TestBed } from '@angular/core/testing';
import { UiUploadFileModule } from './ui-upload-file.module';

describe('UiUploadFileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiUploadFileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiUploadFileModule).toBeDefined();
  });
});
