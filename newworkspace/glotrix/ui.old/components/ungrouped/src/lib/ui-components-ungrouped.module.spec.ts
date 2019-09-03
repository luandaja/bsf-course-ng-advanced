import { async, TestBed } from '@angular/core/testing';
import { UiComponentsUngroupedModule } from './ui-components-ungrouped.module';

describe('UiComponentsUngroupedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsUngroupedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsUngroupedModule).toBeDefined();
  });
});
