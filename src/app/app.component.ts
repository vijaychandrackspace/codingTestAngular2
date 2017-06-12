import {Component, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';

import {holidayService} from './holidays/holidays.service';
import {SharedService} from './app.SharedService';

@Component({
  selector: 'my-app',
  template: `<p>Hi Welcome to US Holidays</p>
             <p>Please enter following detials</p>
  			 <p>Country: <input type="text" [(ngModel)]="country"/></p>
  			 <p>Year: <input type="text" [(ngModel)]="year" /></p>
  			 <p>Month: <input type="text" [(ngModel)]="month" placeholder="please enter month number from 1 to 12"/></p>
  			 <p><button (click)="getHolidays()">Submit</button></p>

  			  <!-- Router Outlet -->
    		  <router-outlet></router-outlet>
            `,
})
export class AppComponent  {
    getData:string;
	country: any;
	year: any;
	month: any;

	constructor(private hs: holidayService, private router: Router, private ss: SharedService) {
    	
  	}

  	getHolidays(){
	  	this.hs.getHolidays(this.country, this.year, this.month).subscribe(
	        (data:any) => {this.getData = JSON.parse(data); 
	                       if(this.getData){this.ss.emitChange(this.getData);
this.router.navigate(['/holidays'])};},
	        (error:any) => alert(error)
	     );
  		
  	}
}
