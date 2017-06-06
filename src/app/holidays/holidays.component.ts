import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';


import {holidayService} from './holidays.service';

@Component({
  selector: 'holidays',
  template: ` <b>List of holidays in 2015</b>
              <div *ngIf="isDataAvailable" >
                     <ul *ngFor = "let holiday of getData.holidays">
            				    <li><a (click)="redirect(holiday.name)">{{holiday.name}}</a></li>
            			   </ul>
      			  </div>
             `
  
})
export class HolidaysComponent  { 
   getData:string;
   isDataAvailable: boolean;

   
  constructor(private hs: holidayService, private router: Router) {
    this.readData();
  }

  readData() {
     this.isDataAvailable = false;
     this.hs.getHolidays().subscribe(
        data => {this.getData = JSON.parse(data); console.log(this.getData); this.isDataAvailable = true},
        error => alert(error)
     );
  }

  redirect(name: string){
     this.router.navigate(['/holiday', name]);
  }
}

