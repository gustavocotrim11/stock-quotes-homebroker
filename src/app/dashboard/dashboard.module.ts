import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { StockCardComponent } from './stock-card/stock-card.component';

@NgModule({
  declarations: [DashboardPageComponent, StockCardComponent],
  imports: [CommonModule],
  exports: [DashboardPageComponent, StockCardComponent],
})
export class DashboardModule {}
