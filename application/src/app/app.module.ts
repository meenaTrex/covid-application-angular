import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared/shared-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './core/approuting/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './covid/dashboard/dashboard.component';
import { NewsComponent } from './covid/news/news.component';
import { PrecautionsComponent } from './covid/precautions/precautions.component';
import { CovidComponent } from './covid/covid.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DistrictDashboardComponent } from './covid/dashboard/district-dashboard/district-dashboard.component';
import { AddNewsComponent } from './covid/news/add-news/add-news.component';

import { LoginService } from './core/services/login.service';
import { VerifyAdminService } from './admin-login/services/verify-admin.service';
import { LatestNewsService } from './covid/services/latest-news.service';
import { GetStateDataService } from './covid/services/get-state-data.service';
import { CanActivateAddNewsService } from './covid/services/can-activate-add-news.service';
import { GetPrecautionsService } from './covid/services/get-precautions.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    PrecautionsComponent,
    CovidComponent,
    AdminLoginComponent,
    DistrictDashboardComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedMaterialModule,
    RouterModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    LoginService,
    VerifyAdminService,
    LatestNewsService,
    GetStateDataService,
    CanActivateAddNewsService,
    GetPrecautionsService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
