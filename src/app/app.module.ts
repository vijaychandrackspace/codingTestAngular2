import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { HolidaysComponent }  from './holidays/holidays.component';
import { HolidayDetailComponent }  from './holidays/holidayDetail.component';
import { holidayService } from './holidays/holidays.service';
import { route } from './app.route';

@NgModule({
  imports:      [ BrowserModule, HttpModule, route],
  declarations: [ AppComponent, HolidaysComponent, HolidayDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [holidayService]
})
export class AppModule { }
