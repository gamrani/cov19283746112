import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../services/cities.service';
import {DateTimeService} from '../services/date-time.service';
import {Constant} from './constants';
import {Annonce} from '../../models/Annonce';

@Component({
  selector: 'app-proposer',
  templateUrl: './proposer.page.html',
  styleUrls: ['./proposer.page.scss'],
})
export class ProposerPage implements OnInit {

  annonce: Annonce = new Annonce();

  cities:any;
  isEscale;
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
  classAutoroute = "roadClicked";
  classNational = "roadNotClicked";
  classAllerSimple = "roadClicked";
  classAllerRetour = "roadNotClicked";
  dateDepart_min;
  dateArrivee_min;
  dateNotValid = false;

  hours ;

  constructor(private citiesService : CitiesService,private dateTimeService:DateTimeService) {
    this.annonce.places = 0;
    this.annonce.typeVoyage ="Aller simple";
    this.annonce.typeRoute = "Autoroute";


    this.annonce.dateDepart = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.annonce.dateArrivee = this.dateTimeService.parseDateToStringWithFormat(new Date());
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
    if(this.annonce.places!=0){
      return true;
    } 
    
    return false;
  }
  confirmAnnonce():boolean{
    return false;
  }
  valider(){
    alert(JSON.stringify(this.annonce));
  }
  chooseTripType(type:string){
    this.annonce.typeVoyage = type;
    this.annonce.typeVoyage = type;
    if(this.annonce.typeVoyage == "Aller simple"){
      this.classAllerSimple = "roadClicked";
      this.classAllerRetour = "roadNotClicked";
    }
    if(this.annonce.typeVoyage == "Aller retour"){
      this.classAllerSimple = "roadNotClicked";
      this.classAllerRetour = "roadClicked";
    }
    this.annonce.dateDepart = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.annonce.dateArrivee = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.dateDepart_min = this.dateTimeService.parseDateToStringWithFormat(new Date());
    this.dateArrivee_min = this.annonce.dateDepart;
    this.annonce.typeVoyage = type;
  }

  chooseRoad(road:string){
    this.annonce.typeRoute = road;
    if(road == "Nationale"){
          this.classNational = "roadClicked";
          this.classAutoroute = "roadNotClicked";
    }
    if(road == "Autoroute"){
      this.classNational = "roadNotClicked";
      this.classAutoroute = "roadClicked";
    }
  }
  areCitiesDefined():boolean{
    if(this.annonce.cityDestination == undefined || this.annonce.cityDepart == undefined || (this.annonce.escales == undefined && this.isEscale) || this.citiesAreEquals())
    {
      return false;
    }
    return true;
  }

  citiesAreEquals():boolean{
    if(this.annonce.cityDestination!= undefined && this.annonce.cityDepart!=undefined)
    {
      if(this.annonce.cityDestination == this.annonce.cityDepart){
        return true;
      }
      if(this.isEscale){
        if(this.annonce.cityDestination == this.annonce.escales){
          return true;
        }
        if(this.annonce.cityDepart == this.annonce.escales){
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
      if(this.annonce.typeVoyage == "Aller simple"){
        if(this.dateTimeService.dateChoosedIsLower(new Date(this.annonce.dateDepart))==false){
          this.step1 = false;
          this.step2 = false;
          this.step3 = true;
        }else{
          this.dateNotValid = true;
        }
      }else if(this.annonce.typeVoyage == "Aller retour"){
        if(this.dateTimeService.dateChoosedIsLower(new Date(this.annonce.dateDepart))==false && this.dateTimeService.dateChoosedIsLower(new Date(this.annonce.dateArrivee))==false){
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
    this.annonce.places = n ;
    switch(n) { 
      case 1: { 
        this.class1 = "clicked";
        this.class2 = "notClicked";
        this.class3 = "notClicked";
        this.class4 = "notClicked";
        this.class5 = "notClicked";
        this.class6 = "notClicked";
        this.class7 = "notClicked";
        this.annonce.places = 1;
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
        this.annonce.places = 2;        
         break; 
      } 
      case 3: { 
        this.class1 = "notClicked";
        this.class2 = "notClicked";
        this.class3 = "clicked";
        this.class4 = "notClicked";
        this.class5 = "notClicked";
        this.class6 = "notClicked";
        this.class7 = "notClicked";
        this.annonce.places = 3;   
        break; 
     } 
     case 4: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "clicked";
      this.class5 = "notClicked";
      this.class6 = "notClicked";
      this.class7 = "notClicked";
      this.annonce.places = 4;      
      break; 
     } 
     case 5: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "clicked";
      this.class6 = "notClicked";
      this.class7 = "notClicked";
      this.annonce.places = 5;     
      break; 
     } 
     case 6: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "notClicked";
      this.class6 = "clicked";
      this.class7 = "notClicked";
      this.annonce.places = 6;     
      break; 
     } 
     case 7: { 
      this.class1 = "notClicked";
      this.class2 = "notClicked";
      this.class3 = "notClicked";
      this.class4 = "notClicked";
      this.class5 = "notClicked";
      this.class6 = "notClicked";
      this.class7 = "clicked";
      this.annonce.places = 7; 
     break; 
    } 
   
   } 
  }


  
 

}
