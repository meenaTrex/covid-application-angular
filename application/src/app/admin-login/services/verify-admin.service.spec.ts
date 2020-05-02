import { TestBed } from '@angular/core/testing';

import { VerifyAdminService } from './verify-admin.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

describe('VerifyAdminService', () => {
  let service: VerifyAdminService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expect credentials to be defined', () => {
    expect(service.credentials).toBeDefined();
  });

  // it('Verify admin if credentials are correct', () => {

  //   service.credentials.username = "covidadmin";
  //   service.credentials.password = "covid19data";
  //   //spy = spyOn(service, 'verifyAdmin').and.returnValue(true);
  //   expect(service.verifyAdmin).toBe(true);
  // });

  // it('Verify admin if credentials are incorrest', () => {

  //   //spy = spyOn(service, 'verifyAdmin').and.returnValue(false);
  //   expect(service.verifyAdmin).toBe(false);
  // });
});
