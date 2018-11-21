import {User} from './User';
import { City } from './City';

export class Annonce {
      public commentaire : string;
      public createur : User;
      public cityDepart : string; 
      public cityDestination: string; 
      public escale : string ; 
      public dateDepart : string;
      public shortDateDepart : string;
      public dateArrivee : string;
      public places : number;
      public typeRoute : string;
      public typeVoyage : string;
      public cities :City[];

      constructor(){
        this.cities = [
            {
                "id": 1,
                "ville": "Aïn Harrouda"
            },
                      {
                "id": 3,
                "ville": "Bouskoura"
            },
            {
                "id": 4,
                "ville": "Casablanca"
            },
            {
                "id": 5,
                "ville": "Médiouna"
            },
            {
                "id": 6,
                "ville": "Mohammédia"
            },
            {
                "id": 7,
                "ville": "Tit Mellil"
            },
            {
                "id": 9,
                "ville": "Bejaâd"
            },
            {
                "id": 10,
                "ville": "Ben Ahmed"
            },
            {
                "id": 11,
                "ville": "Benslimane"
            },
            {
                "id": 12,
                "ville": "Berrechid"
            },
            {
                "id": 13,
                "ville": "Boujniba"
            },
           
            {
                "id": 15,
                "ville": "Bouznika"
            },
            {
                "id": 16,
                "ville": "Deroua"            },
            {
                "id": 17,
                "ville": "El Borouj"            },
            {
                "id": 18,
                "ville": "El Gara"            },
            {
                "id": 19,
                "ville": "Guisser"            },
            
            {
                "id": 21,
                "ville": "Khouribga"            },
           
            {
                "id": 23,
                "ville": "Oued Zem"            },
    
          
            {
                "id": 29,
                "ville": "Ras El Aïn"            },
            {
                "id": 30,
                "ville": "Settat"            },
            {
                "id": 31,
                "ville": "Sidi Rahhal Chataï"            },
            {
                "id": 32,
                "ville": "Soualem"            },
            {
                "id": 33,
                "ville": "Azemmour"            },
          
           
            {
                "id": 37,
                "ville": "El Jadida"            },
            
           
            {
                "id": 41,
                "ville": "Jorf Lasfar"            },
            {
                "id": 42,
                "ville": "Khemis Zemamra"            },
            {
                "id": 43,
                "ville": "Laaounate"            },
            {
                "id": 44,
                "ville": "Moulay Abdallah"            },
            {
                "id": 45,
                "ville": "Oualidia"            },
           
            {
                "id": 49,
                "ville": "Safi"            },
          
            {
                "id": 51,
                "ville": "Sebt Gzoula"            },
            {
                "id": 52,
                "ville": "Sidi Ahmed"            },
           
            {
                "id": 54,
                "ville": "Sidi Bennour"            },
            {
                "id": 55,
                "ville": "Sidi Bouzid"            },
          
            {
                "id": 57,
                "ville": "Youssoufia"            },
            {
                "id": 58,
                "ville": "Fès"            },
          
            {
                "id": 64,
                "ville": "Imouzzer"            },
          
            {
                "id": 67,
                "ville": "Moulay Yaâcoub"            },
            
            
            {
                "id": 71,
                "ville": "Séfrou"            },
            {
                "id": 72,
                "ville": "Skhirate"            },
     
            {
                "id": 79,
                "ville": "Kénitra"            },
            
            {
                "id": 83,
                "ville": "Mehdia"            },
            {
                "id": 84,
                "ville": "Moulay Bousselham"            },
            {
                "id": 85,
                "ville": "Sidi Allal Tazi"            },
            {
                "id": 86,
                "ville": "Sidi Kacem"            },
            {
                "id": 87,
                "ville": "Sidi Slimane"            },
            {
                "id": 88,
                "ville": "Sidi Taibi"            },
            {
                "id": 89,
                "ville": "Sidi Yahya El Gharb"            },
            {
                "id": 90,
                "ville": "Souk El Arbaa"            },
           
            {
                "id": 95,
                "ville": "Es-Semara"            },
           
            {
                "id": 98,
                "ville": "Guelmim"            },
            
            {
                "id": 100,
                "ville": "Tan-Tan"            },
           
            {
                "id": 103,
                "ville": "Marrakech"            },
           
            {
                "id": 118,
                "ville": "Ben Guerir"            },
            {
                "id": 119,
                "ville": "Chichaoua"            },
           
            {
                "id": 121,
                "ville": "El Kelaâ des Sraghna"            },
            {
                "id": 122,
                "ville": "Essaouira"            },
           
            {
                "id": 138,
                "ville": "Sidi Rahhal"            },
            
            {
                "id": 150,
                "ville": "Meknès\u200e"            },
            {
                "id": 151,
                "ville": "Khénifra"            },
           
            {
                "id": 158,
                "ville": "Arfoud"            },
            {
                "id": 159,
                "ville": "Azrou"            },
           
            {
                "id": 171,
                "ville": "Errachidia"            },
    
            {
                "id": 177,
                "ville": "Ifrane"            },
           
            {
                "id": 179,
                "ville": "Jorf"            },
          
            {
                "id": 183,
                "ville": "M'rirt"            },
            {
                "id": 184,
                "ville": "Midelt"            },
           
            {
                "id": 186,
                "ville": "Moulay Bouazza"            },
       
            {
                "id": 211,
                "ville": "Berkane"            },
           
            {
                "id": 225,
                "ville": "Figuig"            },
           
            {
                "id": 228,
                "ville": "Jerada"            },
          
            {
                "id": 235,
                "ville": "Nador"            },
           
            {
                "id": 238,
                "ville": "Oujda"            },
            {
                "id": 239,
                "ville": "Ras El Ma"            },
            {
                "id": 240,
                "ville": "Saïdia"            },
           
            {
                "id": 245,
                "ville": "Taourirt"            },
           
          
            {
                "id": 252,
                "ville": "Rabat"            },
            {
                "id": 253,
                "ville": "Salé"            },
            {
                "id": 254,
                "ville": "Ain El Aouda"            },
            {
                "id": 255,
                "ville": "Harhoura"            },
            {
                "id": 256,
                "ville": "Khémisset"            },
            {
                "id": 257,
                "ville": "Oulmès"            },
            {
                "id": 258,
                "ville": "Rommani"            },
        
            {
                "id": 260,
                "ville": "Sidi Bouknadel"            },
            {
                "id": 261,
                "ville": "Skhirat"            },
            {
                "id": 262,
                "ville": "Tamesna"            },
            {
                "id": 263,
                "ville": "Témara"            },
           
            {
                "id": 265,
                "ville": "Tiflet"            },
            {
                "id": 266,
                "ville": "Touarga"            },
            {
                "id": 267,
                "ville": "Agadir"            },
           
            {
                "id": 270,
                "ville": "Aït Melloul"            },
           
            {
                "id": 291,
                "ville": "Inezgane"            },
           
            {
                "id": 293,
                "ville": "Kelaat-M'Gouna"            },
           
            {
                "id": 300,
                "ville": "Ouarzazate"            },
           
            {
                "id": 304,
                "ville": "Sidi Ifni"            },
           
            {
                "id": 307,
                "ville": "Tafraout"            },
            {
                "id": 308,
                "ville": "Taghzout"            },
            
            {
                "id": 319,
                "ville": "Tiznit"            },
           
            {
                "id": 321,
                "ville": "Zagora"            },
          
            {
                "id": 324,
                "ville": "Azilal"            },
        
            {
                "id": 327,
                "ville": "Béni Mellal"            },
            {
                "id": 328,
                "ville": "Bin elouidane"            },
           
            {
                "id": 332,
                "ville": "Demnate"            },
            
            {
                "id": 334,
                "ville": "El Ksiba"            },
           
            {
                "id": 336,
                "ville": "Fquih Ben Salah"            },
            {
                "id": 337,
                "ville": "Kasba Tadla"            },
          
            {
                "id": 343,
                "ville": "Souk Sebt Oulad Nemma"            },
            {
                "id": 344,
                "ville": "Zaouïat Cheikh"            },
            {
                "id": 345,
                "ville": "Tanger\u200e"            },
            {
                "id": 346,
                "ville": "Tétouan\u200e"            },
            {
                "id": 347,
                "ville": "Akchour"            },
            {
                "id": 348,
                "ville": "Assilah"            },
          
            {
                "id": 352,
                "ville": "Chefchaouen"            },
          
            {
                "id": 355,
                "ville": "Fnideq"            },
          
            {
                "id": 357,
                "ville": "Jebha"            },
          
            {
                "id": 360,
                "ville": "Ksar El Kébir"            },
            {
                "id": 361,
                "ville": "Larache"            },
            {
                "id": 362,
                "ville": "M'diq"            },
            {
                "id": 363,
                "ville": "Martil"            },
           
            {
                "id": 365,
                "ville": "Oued Laou"            },
           
            {
                "id": 367,
                "ville": "Ouezzane"            },
                     {
                "id": 374,
                "ville": "Al Hoceïma\u200e"            },
           
           
            {
                "id": 379,
                "ville": "Guercif\u200e"            },
           
            {
                "id": 397,
                "ville": "Laayoune\u200e"            },
         
            {
                "id": 399,
                "ville": "Tarfaya\u200e"            },
            {
                "id": 400,
                "ville": "Boujdour\u200e"            },
        
            {
                "id": 402,
                "ville": "Oued-Eddahab "            },
            {
                "id": 403,
                "ville": "Stehat"            }
        ];
        this.cities.sort((a, b) => {
            if (a.ville < b.ville) return -1;
            else if (a.ville > b.ville) return 1;
            else return 0;
          });  
    }
    }