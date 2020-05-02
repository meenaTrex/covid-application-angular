import { Component, OnInit } from '@angular/core';
import { GetPrecautionsService } from '../services/get-precautions.service';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {
  precautionsData: Array<string> = new Array<string>();
  constructor(private getPrecautionsService: GetPrecautionsService) { }

  ngOnInit(): void {
    this.precautionsData = this.getPrecautionsService.getPrecautions();
  }

}
