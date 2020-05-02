import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStateDataService } from '../../services/get-state-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-district-dashboard',
  templateUrl: './district-dashboard.component.html',
  styleUrls: ['./district-dashboard.component.css']
})
export class DistrictDashboardComponent implements OnInit {
  displayedColumns: string[] = ['Index', 'State', 'Total Cases', 'Cases Active', 'Cases Recovered', 'Cases Deceased'];
  dataSource = new MatTableDataSource();
  state: string;
  districtData: any;
  constructor(private route: ActivatedRoute, private getStateDataService: GetStateDataService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      if (data.state)
        this.state = data.state;

    });
    this.getStateDataService.getDistrictList().subscribe((data) => {
      this.districtData = data;
      this.dataSource.data = this.getStateDataService.getDistrictData(this.state, this.districtData);
      this.dataSource.paginator = this.paginator;
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
