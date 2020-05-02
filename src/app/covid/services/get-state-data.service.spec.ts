import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GetStateDataService } from './get-state-data.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

describe('GetStateDataService', () => {
  let service: GetStateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetStateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('district data api to match', () => {
    expect(service.districtUrl).toEqual("https://api.covid19india.org/state_district_wise.json");
  });

  it('state data api to match', () => {
    expect(service.covidUrl).toEqual("https://api.covid19india.org/data.json");
  });


  it('should get api response type as json', () => {
    expect(service.getCovidList().subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          expect(event.body.responseType).toEqual('json');
      }
    }))

    expect(service.getDistrictList().subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          expect(event.body.responseType).toEqual('json');
      }
    }))
  });

  // it('should get service', inject(
  //   [HttpTestingController],
  //   (
  //     httpMock: HttpTestingController,
  //   ) => {
  //     const mockReq = httpMock.expectOne(service.url);

  //     expect(mockReq.cancelled).toBeFalsy();
  //     expect(mockReq.request.responseType).toEqual('json');
  //     httpMock.verify();
  //   }
  // )
  // );


});
