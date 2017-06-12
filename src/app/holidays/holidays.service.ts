import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class holidayService {
 
  constructor(private http:Http)
  {
    this.http=http;
  }

  getHolidays(country:string, year:string, month:string){
       console.log('Service called');
       return this.http.get('https://holidayapi.com/v1/holidays?key=5c252665-102a-4680-a065-31c51879f72e&country='+country+'&year='+year+'&month='+month)
              .map(function(res: any) { return JSON.stringify(res.json())});
  }
} 