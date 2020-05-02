import { TestBed, inject } from '@angular/core/testing';

import { GetPrecautionsService } from './get-precautions.service';

describe('GetPrecautionsService', () => {
  let service: GetPrecautionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPrecautionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('precautionsData to be defined', () => {
    expect(service.precautionsData).toBeDefined();
  });
});
