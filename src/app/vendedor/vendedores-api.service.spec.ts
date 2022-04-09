import { TestBed } from '@angular/core/testing';

import { VendedoresApiService } from './vendedores-api.service';

describe('VendedoresApiService', () => {
  let service: VendedoresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendedoresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
