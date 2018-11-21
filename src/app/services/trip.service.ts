import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../../models/User';
import { Observable } from 'rxjs';
import {Config} from '../../server.config';
import { Annonce } from '../../models/Annonce';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })};

@Injectable({
  providedIn: 'root'
})
export class TripService {
  config:Config = new Config();
  user:User;
  apiUrl = this.config.uriLocal+"/trip";
  constructor(private http: HttpClient) { }

    // save trip
    saveTrip(trip : Annonce) : Observable<Annonce>{  
      this.user = new User();
      trip.createur = this.user;
      let stringToSplit = trip.dateDepart;
      let x = stringToSplit.split("T");
      trip.shortDateDepart = x[0];
      return this.http.post<Annonce>(this.apiUrl+"/create",trip,httpOptions);
    }
    
    getAllTrips():Observable<Annonce>{
      return this.http.get<Annonce>(this.apiUrl+"/allTrips");
    }
    getTripsByCitiesAndDate(cityDepart,cityDestination,dateDepart){
        return this.http.get(this.apiUrl+"/trips/"+cityDepart+"/"+cityDestination+"/"+dateDepart);
    }
    getTripsByCities(cityDepart,cityDestination){
      return this.http.get(this.apiUrl+"/trips/"+cityDepart+"/"+cityDestination);
    }
}
