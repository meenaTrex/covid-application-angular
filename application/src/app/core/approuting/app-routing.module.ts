import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../covid/dashboard/dashboard.component';
import { NewsComponent } from '../../covid/news/news.component';
import { PrecautionsComponent } from '../../covid/precautions/precautions.component';
import { CovidComponent } from '../../covid/covid.component';
import { AdminLoginComponent } from '../../admin-login/admin-login.component';
import { DistrictDashboardComponent } from '../../covid/dashboard/district-dashboard/district-dashboard.component';
import { AddNewsComponent } from '../../covid/news/add-news/add-news.component';
import { CanActivateAddNewsService } from '../../covid/services/can-activate-add-news.service';

const routes: Routes = [
  { path: " ", redirectTo: "covid", pathMatch: "full" },
  {
    path: "covid", component: CovidComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "dashboard/:state", component: DistrictDashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "news", component: NewsComponent },
      { path: "news/add", component: AddNewsComponent, canActivate: [CanActivateAddNewsService] },
      { path: "precautions", component: PrecautionsComponent },
      { path: "login", component: AdminLoginComponent }
    ]
  },
  { path: "**", redirectTo: "covid", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
