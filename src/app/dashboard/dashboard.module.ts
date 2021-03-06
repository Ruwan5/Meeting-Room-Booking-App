import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { LineChartComponent } from '../shared/line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DashboardRoutingModule, ChartsModule, CommonModule, ReactiveFormsModule,
  ],
  declarations: [ DashboardComponent, BarChartComponent, LineChartComponent  ],
  providers: [
      BarChartComponent, LineChartComponent,
  ]
})
export class DashboardModule { }
