import { Component, OnInit, ViewChild } from '@angular/core';
import { GetStateDataService } from '../services/get-state-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { Dashboard } from '../../shared/classes/covidStateData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Index', 'State', 'Total Cases', 'Cases Active', 'Cases Recovered', 'Cases Deceased'];
  stateData: any;
  dataSource = new MatTableDataSource();

  constructor(private getStateDataService: GetStateDataService, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.getStateDataService.getCovidList().subscribe((data) => {
      this.stateData = data.statewise;
      this.dataSource.data = this.getStateDataService.getStateData(this.stateData);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showDistricts(Row: Dashboard) {
    this.router.navigateByUrl('covid/dashboard/' + Row.State);
  }
}
