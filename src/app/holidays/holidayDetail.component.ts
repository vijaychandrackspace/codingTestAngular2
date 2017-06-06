import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'holidayDetail',
  template: ` <b>HolidayDetail</b>
              <p>{{name}}</p>
              <button (click)="goBack()">Back</button>
             `
})
export class HolidayDetailComponent  { 
 name: string;
 constructor(private router: Router, queryParam: ActivatedRoute) {
  	this.name = queryParam.snapshot.params['name'];
    
  }

 goBack(){
     this.router.navigate(['/']);
  }
}