import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  retour(){
    this.navCtrl.pop();
  }
}
