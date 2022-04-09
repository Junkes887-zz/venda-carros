import { TestBed } from '@angular/core/testing';

import { CarrosApiService } from './carros-api.service';

describe('CarrosApiService', () => {
  let service: CarrosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
