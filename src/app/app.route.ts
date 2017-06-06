import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolidayDetailComponent } from './holidays/holidayDetail.component';
import { HolidaysComponent } from './holidays/holidays.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HolidaysComponent },
  { path: 'holiday/:name', component: HolidayDetailComponent }
];

export const route: ModuleWithProviders = RouterModule.forRoot(routes);