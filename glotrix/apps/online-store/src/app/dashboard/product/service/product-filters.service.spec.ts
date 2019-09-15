import { TestBed } from '@angular/core/testing';

import { ProductFiltersService } from './product-filters.service';

describe('ProductFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFiltersService = TestBed.get(ProductFiltersService);
    expect(service).toBeTruthy();
  });
});
