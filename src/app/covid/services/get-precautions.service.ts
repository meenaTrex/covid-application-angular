import { Injectable } from '@angular/core';
import precautions from '../../../assets/precautions.json';

@Injectable({
  providedIn: 'root'
})
export class GetPrecautionsService {
  precautionsData: Array<string> = new Array<string>();
  constructor() {
    this.precautionsData = precautions.measures;
  }

  getPrecautions(): Array<string> {
    return this.precautionsData;
  }
}
