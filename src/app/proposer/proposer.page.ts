import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../services/cities.service';
import {DateTimeService} from '../services/date-time.service';
import {Constant} from './constants';


@Component({
  selector: 'app-proposer',
  templateUrl: './proposer.page.html',
  styleUrls: ['./proposer.page.scss'],
})
export class ProposerPage implements OnInit {
  cities:any;
  city_destination;
  city_depart;
  city_escale;
  escale;
  step1 = true;
  step2 = false;
  step3 = false;
  placeNumber = 7;
  class1 = "notClicked";
  class2 = "notClicked";
  class3 = "notClicked";
  class4 = "notClicked";
  class5 = "notClicked";
  class6 = "notClicked";
  class7 = "notClicked";
  numberOfPlace = 0;
  classAutoroute = "roadClicked";
  classNational = "roadNotClicked";
  classAllerSimple = "roadClicked";
  classAllerRetour = "roadNotClicked";
  tripType ="aller";
  date_aller;
  date_retour;
  date_aller_min;
  date_retour_min;
  dateNotValid = false;

  hours ;

  constructor(private citiesService : CitiesService,private dateTimeService:DateTimeService) {
    this.date_aller = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.date_retour = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.hours = Array(23).fill(0).map((x,i)=>i);
    try {
      this.citiesService.getJSon().subscribe(result => {
        this.cities = result;
      });
    } catch (e) {
      console.log("Profile" + e);
    }
   }

  ngOnInit() {
  }
  
  step2Completed():boolean{
    if(this.numberOfPlace!=0){
      return true;
    } 
    
    return false;
  }
  confirmAnnonce():boolean{
    return false;
  }
  chooseTripType(type:string){
    this.tripType = type;
    if(this.tripType == "aller"){
      this.classAllerSimple = "roadClicked";
      this.classAllerRetour = "roadNotClicked";
    }
    if(this.tripType == "allerRetour"){
      this.classAllerSimple = "roadNotClicked";
      this.classAllerRetour = "roadClicked";
    }
    this.date_aller = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.date_retour = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.date_aller_min = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.date_retour_min = this.date_aller;
    this.tripType = type;
  }

  chooseRoad(road:string){
    if(road == "national"){
          this.classNational = "roadClicked";
          this.classAutoroute = "roadNotClicked";
    }
    if(road == "autoroute"){
      this.classNational = "roadNotClicked";
      this.classAutoroute = "roadClicked";
    }
  }
  areCitiesDefined():boolean{
    if(this.city_destination == undefined || this.city_depart == undefined || (this.city_escale == undefined && this.escale) || this.citiesAreEquals())
    {
      return false;
    }
    return true;
  }

  citiesAreEquals():boolean{
    if(this.city_destination!= undefined && this.city_depart!=undefined)
    {
      if(this.city_destination == this.city_depart){
        return true;
      }
      if(this.escale){
        if(this.city_destination == this.city_escale){
          return true;
        }
        if(this.city_depart == this.city_escale){
          return true;
        }
      }
    }
    return false;
  }
  continue(step:string){
    if(step == "step2"){
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
    }
    if(step == "step3"){
      if(this.tripType == "aller"){
        if(this.dateTimeService.dateChoosedIsLower(new Date(this.date_aller))==false){
          this.step1 = false;
          this.step2 = false;
          this.step3 = true;
        }else{
          this.dateNotValid = true;
        }
      }else if(this.tripType == "allerRetour"){
        if(this.dateTimeService.dateChoosedIsLower(new Date(this.date_aller))==false && this.dateTimeService.dateChoosedIsLower(new Date(this.date_retour))==false){
          this.step1 = false;
          this.step2 = false;
          this.step3 = true;
        }else{
          this.dateNotValid = true;
        }
      }
    } 
  }

  howMuchPlace(n:number){
    switch(n) { 
      case 1: { 
        this.class1 = "clicked";
        this.class2 = "notClicked";
        this.class3 = "notClicked";
        this.class4 = "notClicked";
        this.class5 = "notClicked";
        this.class6 = "notClicked";
        this.class7 = "notClicked";
        this.numberOfPlace = 1;
         break; 
      } 
      case 2: { 
        this.class1 = "notClicked";
        this.class2 = "clicked";
        this.class3 = "notClicked";
        this.class4 = "notClicked";
        this.class5 = "notClicked";
        this.class6 = "notClicked";
        this.class7 = "notClicked";
        this.numberOfPlace = 2;         break; 
      } 
      case 3: { 
        this.class1 = "notClicked";
        this.class2 = "notClicked";
        this.class3 = "clicked";
        this.class4 = "notClicked";
        this.class5 = "notClicked";
        this.class6 = "notClicked";
        this.class7 = "notClicked";
        this.numberOfPlace = 3;        break; 
     } 
     case 4: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "clicked";
      this.class5 = "notClicked";
      this.class6 = "notClicked";
      this.class7 = "notClicked";
      this.numberOfPlace = 4;      break; 
     } 
     case 5: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "clicked";
      this.class6 = "notClicked";
      this.class7 = "notClicked";
      this.numberOfPlace = 5;     break; 
     } 
     case 6: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "notClicked";
      this.class6 = "clicked";
      this.class7 = "notClicked";
      this.numberOfPlace = 6;     break; 
     } 
     case 7: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "notClicked";
      this.class6 = "notClicked";
      this.class7 = "clicked";
      this.numberOfPlace = 7; 
     break; 
    } 
   
   } 
  }


  
 

}
