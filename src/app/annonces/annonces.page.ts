import { Component, OnInit } from '@angular/core';
import {TripService} from '../services/trip.service';
import { Annonce } from '../../models/Annonce';
import { City } from '../../models/City';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {

  annonces : any = [];
  annonce : Annonce = new Annonce();
  searchQuery: string = '';
  cities: City[] = this.annonce.cities;
  shortDateDepart : any;
  cityDepart : string;
  cityDestination : string;
  showAnnonces:boolean = false;
  showSearchForm:boolean = true;
  dateMin : String = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

  constructor(private tripService:TripService,public datepipe: DatePipe) {
    this.initializeAnnonces();
   }

   dateMinF(){
      return "2018-11-21";
   }
  ngOnInit() {
  }
  formControlValue = '';

  areCitiesDefined():boolean{
    if(this.annonce.cityDestination == undefined || this.annonce.cityDepart == undefined || this.citiesAreEquals())
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
    }
    return false;
  }
  chercherUnTrip(){
    if(this.annonce.shortDateDepart!= undefined){
      this.tripService.getTripsByCitiesAndDate(this.annonce.cityDepart,this.annonce.cityDestination,this.annonce.shortDateDepart).subscribe(
        data =>{
          this.annonces = data;
        }
      );
    }else{
      this.tripService.getTripsByCities(this.annonce.cityDepart,this.annonce.cityDestination).subscribe(
        data =>{
          this.annonces = data;
        }
      );
    }
    this.showAnnonces = true;
  }

  initializeAnnonces(){
    this.getAnnonces();
   
  }
  getItems(ev: any) {
  
    // set val to the value of the searchbar
    const val = ev.target.value;

    // Reset items back to all of the items
    if(val.trim() != '') this.initializeAnnonces();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.annonces = this.annonces.filter((annonce) => {
        return (annonce.cityDepart.ville.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getAnnonces(){
    this.tripService.getAllTrips().subscribe(
      data => {this.annonces = data;}
    )
  }

}
