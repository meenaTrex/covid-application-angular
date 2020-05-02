import { TestBed } from '@angular/core/testing';

import { CanActivateAddNewsService } from './can-activate-add-news.service';

describe('CanActivateAddNewsService', () => {
  let service: CanActivateAddNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateAddNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
