import { Component, OnInit } from '@angular/core';
import {TripService} from '../services/trip.service';
import { Annonce } from '../../models/Annonce';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {

  annonces : any = [];
  constructor(private tripService:TripService) {
    this.getAnnonces();
   }

  ngOnInit() {
    this.getAnnonces();
  }

  getAnnonces(){
    this.tripService.getAllTrips().subscribe(
      data => {this.annonces = data;}
    )
  }

}
