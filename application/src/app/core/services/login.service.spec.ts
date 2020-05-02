import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loggenIn parameter to be defined', () => {
    expect(service.loggedIn).toBeDefined();
  });

  it('isLogged to be true if token is set', () => {
    if (localStorage.getItem('token'))
      expect(service.isLoggedIn).toBeTruthy();
  });

});
