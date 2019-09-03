import { async, TestBed } from '@angular/core/testing';
import { UiNavigationModule } from './ui-components-navigation.module';

describe('UiComponentsNavigationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNavigationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiNavigationModule).toBeDefined();
  });
});
