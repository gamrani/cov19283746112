import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }
  public parseDateToStringWithFormat(date: Date): string {
    let result: string;
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let hh = date.getHours().toString();
    let min = date.getMinutes().toString();
    let sec = date.getSeconds().toString();
    dd = dd.length === 2 ? dd : "0" + dd;
    mm = mm.length === 2 ? mm : "0" + mm;
    hh = hh.length === 2 ? hh : "0" + hh;
    min = min.length === 2 ? min : "0" + min;
    sec= sec.length == 2 ? sec : "0"+sec;
    result = [date.getFullYear(), '-', mm, '-', dd, 'T', hh, ':', min,':',sec].join('');

    return result;
  }

  public dateChoosedIsLower(date : Date):boolean{
     let now = new Date();
     let result:boolean = false;
     if(date.getFullYear() < now.getFullYear()){
       result = true;
     }
     if (date.getMonth() < now.getMonth()){
       result = true;
     }
     if (date.getDay() < now.getDay()){
        result = true;
     }
     return result;
  }
}
