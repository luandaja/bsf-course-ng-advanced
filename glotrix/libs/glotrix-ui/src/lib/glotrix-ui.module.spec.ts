import { async, TestBed } from '@angular/core/testing';
import { GlotrixUiModule } from './glotrix-ui.module';

describe('GlotrixUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GlotrixUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GlotrixUiModule).toBeDefined();
  });
});
