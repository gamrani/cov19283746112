import {User} from './User';

export class Annonce {
      public prix : number;
      public commentaire : string;
      public createur : User;
      public cityDepart : string; 
      public cityDestination: string; 
      public escales : string ; 
      public dateDepart : string; 
      public dateArrivee : string;
      public places : number;
      public typeRoute : string;
      public typeVoyage : string;

      constructor(){}
    }