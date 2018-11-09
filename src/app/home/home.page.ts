import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  proposer : boolean = false;
  chercher : boolean = false;
  demander : boolean = false;
  profil : boolean = false;
  constructor(private router: Router) { }
  loginForm(){
    this.router.navigateByUrl('/Registration');
  }
  
  onClickProposer(){
    this.proposer = true;
    this.chercher = false;
    this.demander = false;
    this.profil = false;
  }
  onClickChercher(){
    this.proposer = false;
    this.chercher = true;
    this.demander = false;
    this.profil = false;
  }
  onClickDemander(){
    this.proposer = false;
    this.chercher = false;
    this.demander = true;
    this.profil = false;
  }
  onClickProfil(){
    this.proposer = false;
    this.chercher = false;
    this.demander = false;
    this.profil = true;
  }

}
