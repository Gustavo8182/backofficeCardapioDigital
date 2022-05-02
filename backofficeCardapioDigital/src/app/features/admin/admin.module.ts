import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin/admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { WeeklyChartComponent } from './weekly-chart/weekly-chart.component';
import { MoreOrdersComponent } from './more-orders/more-orders.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminComponent,
    NavAdminComponent,
    WeeklyChartComponent,
    MoreOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavAdminComponent,
    AdminPageComponent
  ]
})
export class AdminModule { }
