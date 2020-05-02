import { TestBed } from '@angular/core/testing';

import { LatestNewsService } from './latest-news.service';

describe('LatestNewsService', () => {
  let service: LatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('latest news array to be defined', () => {
    expect(service.latestNewsArray).toBeDefined();
  });
});
