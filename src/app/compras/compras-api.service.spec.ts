import { TestBed } from '@angular/core/testing';

import { ComprasApiService } from './compras-api.service';

describe('ComprasApiService', () => {
  let service: ComprasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
