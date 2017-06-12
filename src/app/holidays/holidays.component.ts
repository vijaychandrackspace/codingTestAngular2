import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {holidayService} from './holidays.service';
import {SharedService} from '../app.SharedService';

@Component({
  selector: 'holidays',
  moduleId: module.id, // Important to make templateURL work just add this is component no other dependency required.
  templateUrl: 'login-page.html'
  
})
export class HolidaysComponent implements OnInit  { 
   getData:string;
   isDataAvailable: boolean;

  constructor(private hs: holidayService, private router: Router, private ss: SharedService) {
      this.getHolidaysData();
  }

  getHolidaysData(){
  this.ss.changeEmitted$.subscribe(
          data => {this.isDataAvailable=true; this.getData = data; console.log(this.getData)}
        );
  }

  redirect(name: string){
     this.router.navigate(['/holiday', name]);
  }

}

