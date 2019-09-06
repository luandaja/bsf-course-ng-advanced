import { async, TestBed } from '@angular/core/testing';
import { UiTablesModule } from './ui-tables.module';

describe('UiTablesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiTablesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiTablesModule).toBeDefined();
  });
});
