import { Injectable } from '@angular/core';
import { IDistrict } from '../../shared/interfaces/district';
import { IState } from '../../shared/interfaces/state';
import statesData from '../../../assets/states.json';
import districtData from '../../../assets/Districts.json';
import { Dashboard } from '../../shared/classes/covidStateData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DistrictAPIUrl, CovidAPIUrl } from '../../core/config/config';

@Injectable({
  providedIn: 'root'
})
export class GetStateDataService {
  dashboard: Dashboard = new Dashboard();
  StateData: Array<Dashboard> = new Array<Dashboard>();
  DistrictData: Array<Dashboard> = new Array<Dashboard>();
  districtData = districtData;
  districts: IDistrict;
  states: any = statesData.states;
  districtUrl: string = DistrictAPIUrl;
  covidUrl: string = CovidAPIUrl;
  map = new Map<string, any>();

  constructor(private http: HttpClient) {
  }

  getCovidList(): Observable<any> {
    return this.http.get(this.covidUrl);
  }

  getDistrictList(): Observable<any> {
    return this.http.get(this.districtUrl);
  }

  getStateData(data: Array<IState>): Array<Dashboard> {
    this.StateData = new Array<Dashboard>();

    data.forEach((element, index) => {
      if (element.state !== "Total") {
        this.dashboard = new Dashboard();

        this.dashboard.Index = index;
        this.dashboard.State = element.state;
        this.dashboard["Total Cases"] = Number(element.confirmed);
        this.dashboard["Cases Active"] = Number(element.active);
        this.dashboard["Cases Deceased"] = Number(element.deaths);
        this.dashboard["Cases Recovered"] = Number(element.recovered);

        this.StateData.push(this.dashboard);
      }

    })
    return this.StateData;
  }

  getDistrictData(state: string, data: any) {

    this.DistrictData = new Array<Dashboard>();

    Object.keys(data[state].districtData).forEach((key, index) => {
      if (key) {

        this.districts = data[state].districtData[key];
        this.dashboard.Index = index + 1;
        this.dashboard.State = key;
        this.dashboard["Total Cases"] = this.districts.confirmed;
        this.dashboard["Cases Active"] = this.districts.active;
        this.dashboard["Cases Recovered"] = this.districts.recovered;
        this.dashboard["Cases Deceased"] = this.districts.deceased;
        this.DistrictData.push(this.dashboard);
        this.dashboard = new Dashboard();
      }

    });

    return this.DistrictData;
  }
}

