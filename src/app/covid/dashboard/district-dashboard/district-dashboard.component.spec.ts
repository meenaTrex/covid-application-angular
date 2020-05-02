import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DistrictDashboardComponent } from './district-dashboard.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('DistrictDashboardComponent', () => {
  let component: DistrictDashboardComponent;
  let fixture: ComponentFixture<DistrictDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DistrictDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Route Id to be > 0 and < 33', () => {
  //   expect(component.id).toBeGreaterThan(0);
  //   expect(component.id).toBeLessThanOrEqual(32);
  // });


  it('Data of table to be defined', () => {
    expect(component.dataSource).toBeDefined();
    expect(component.displayedColumns.length).toEqual(6);
  });

  it('length of table columns array to be fixed equal to 6', () => {
    expect(component.displayedColumns.length).toEqual(6);
  });
});
