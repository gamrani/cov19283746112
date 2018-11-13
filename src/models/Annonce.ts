import {User} from './User';
import { City } from './City';

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
      public cities :City[];

      constructor(){
        this.cities = [
            {
                "id": 1,
                "ville": "Aïn Harrouda",
                "region": 1
            },
                      {
                "id": 3,
                "ville": "Bouskoura",
                "region": 1
            },
            {
                "id": 4,
                "ville": "Casablanca",
                "region": 1
            },
            {
                "id": 5,
                "ville": "Médiouna",
                "region": 1
            },
            {
                "id": 6,
                "ville": "Mohammédia",
                "region": 1
            },
            {
                "id": 7,
                "ville": "Tit Mellil",
                "region": 1
            },
            {
                "id": 9,
                "ville": "Bejaâd",
                "region": 2
            },
            {
                "id": 10,
                "ville": "Ben Ahmed",
                "region": 2
            },
            {
                "id": 11,
                "ville": "Benslimane",
                "region": 2
            },
            {
                "id": 12,
                "ville": "Berrechid",
                "region": 2
            },
            {
                "id": 13,
                "ville": "Boujniba",
                "region": 2
            },
           
            {
                "id": 15,
                "ville": "Bouznika",
                "region": 2
            },
            {
                "id": 16,
                "ville": "Deroua",
                "region": 2
            },
            {
                "id": 17,
                "ville": "El Borouj",
                "region": 2
            },
            {
                "id": 18,
                "ville": "El Gara",
                "region": 2
            },
            {
                "id": 19,
                "ville": "Guisser",
                "region": 2
            },
            
            {
                "id": 21,
                "ville": "Khouribga",
                "region": 2
            },
           
            {
                "id": 23,
                "ville": "Oued Zem",
                "region": 2
            },
    
          
            {
                "id": 29,
                "ville": "Ras El Aïn",
                "region": 2
            },
            {
                "id": 30,
                "ville": "Settat",
                "region": 2
            },
            {
                "id": 31,
                "ville": "Sidi Rahhal Chataï",
                "region": 2
            },
            {
                "id": 32,
                "ville": "Soualem",
                "region": 2
            },
            {
                "id": 33,
                "ville": "Azemmour",
                "region": 3
            },
          
           
            {
                "id": 37,
                "ville": "El Jadida",
                "region": 3
            },
            
           
            {
                "id": 41,
                "ville": "Jorf Lasfar",
                "region": 3
            },
            {
                "id": 42,
                "ville": "Khemis Zemamra",
                "region": 3
            },
            {
                "id": 43,
                "ville": "Laaounate",
                "region": 3
            },
            {
                "id": 44,
                "ville": "Moulay Abdallah",
                "region": 3
            },
            {
                "id": 45,
                "ville": "Oualidia",
                "region": 3
            },
           
            {
                "id": 49,
                "ville": "Safi",
                "region": 3
            },
          
            {
                "id": 51,
                "ville": "Sebt Gzoula",
                "region": 3
            },
            {
                "id": 52,
                "ville": "Sidi Ahmed",
                "region": 3
            },
           
            {
                "id": 54,
                "ville": "Sidi Bennour",
                "region": 3
            },
            {
                "id": 55,
                "ville": "Sidi Bouzid",
                "region": 3
            },
          
            {
                "id": 57,
                "ville": "Youssoufia",
                "region": 3
            },
            {
                "id": 58,
                "ville": "Fès",
                "region": 4
            },
          
            {
                "id": 64,
                "ville": "Imouzzer",
                "region": 4
            },
          
            {
                "id": 67,
                "ville": "Moulay Yaâcoub",
                "region": 4
            },
            
            
            {
                "id": 71,
                "ville": "Séfrou",
                "region": 4
            },
            {
                "id": 72,
                "ville": "Skhirate",
                "region": 4
            },
     
            {
                "id": 79,
                "ville": "Kénitra",
                "region": 5
            },
            
            {
                "id": 83,
                "ville": "Mehdia",
                "region": 5
            },
            {
                "id": 84,
                "ville": "Moulay Bousselham",
                "region": 5
            },
            {
                "id": 85,
                "ville": "Sidi Allal Tazi",
                "region": 5
            },
            {
                "id": 86,
                "ville": "Sidi Kacem",
                "region": 5
            },
            {
                "id": 87,
                "ville": "Sidi Slimane",
                "region": 5
            },
            {
                "id": 88,
                "ville": "Sidi Taibi",
                "region": 5
            },
            {
                "id": 89,
                "ville": "Sidi Yahya El Gharb",
                "region": 5
            },
            {
                "id": 90,
                "ville": "Souk El Arbaa",
                "region": 5
            },
           
            {
                "id": 95,
                "ville": "Es-Semara",
                "region": 6
            },
           
            {
                "id": 98,
                "ville": "Guelmim",
                "region": 6
            },
            
            {
                "id": 100,
                "ville": "Tan-Tan",
                "region": 6
            },
           
            {
                "id": 103,
                "ville": "Marrakech",
                "region": 7
            },
           
            {
                "id": 118,
                "ville": "Ben Guerir",
                "region": 7
            },
            {
                "id": 119,
                "ville": "Chichaoua",
                "region": 7
            },
           
            {
                "id": 121,
                "ville": "El Kelaâ des Sraghna",
                "region": 7
            },
            {
                "id": 122,
                "ville": "Essaouira",
                "region": 7
            },
           
            {
                "id": 138,
                "ville": "Sidi Rahhal",
                "region": 7
            },
            
            {
                "id": 150,
                "ville": "Meknès\u200e",
                "region": 8
            },
            {
                "id": 151,
                "ville": "Khénifra",
                "region": 8
            },
           
            {
                "id": 158,
                "ville": "Arfoud",
                "region": 8
            },
            {
                "id": 159,
                "ville": "Azrou",
                "region": 8
            },
           
            {
                "id": 171,
                "ville": "Errachidia",
                "region": 8
            },
    
            {
                "id": 177,
                "ville": "Ifrane",
                "region": 8
            },
           
            {
                "id": 179,
                "ville": "Jorf",
                "region": 8
            },
          
            {
                "id": 183,
                "ville": "M'rirt",
                "region": 8
            },
            {
                "id": 184,
                "ville": "Midelt",
                "region": 8
            },
           
            {
                "id": 186,
                "ville": "Moulay Bouazza",
                "region": 8
            },
       
            {
                "id": 211,
                "ville": "Berkane",
                "region": 9
            },
           
            {
                "id": 225,
                "ville": "Figuig",
                "region": 9
            },
           
            {
                "id": 228,
                "ville": "Jerada",
                "region": 9
            },
          
            {
                "id": 235,
                "ville": "Nador",
                "region": 9
            },
           
            {
                "id": 238,
                "ville": "Oujda",
                "region": 9
            },
            {
                "id": 239,
                "ville": "Ras El Ma",
                "region": 9
            },
            {
                "id": 240,
                "ville": "Saïdia",
                "region": 9
            },
           
            {
                "id": 245,
                "ville": "Taourirt",
                "region": 9
            },
           
          
            {
                "id": 252,
                "ville": "Rabat",
                "region": 10
            },
            {
                "id": 253,
                "ville": "Salé",
                "region": 10
            },
            {
                "id": 254,
                "ville": "Ain El Aouda",
                "region": 10
            },
            {
                "id": 255,
                "ville": "Harhoura",
                "region": 10
            },
            {
                "id": 256,
                "ville": "Khémisset",
                "region": 10
            },
            {
                "id": 257,
                "ville": "Oulmès",
                "region": 10
            },
            {
                "id": 258,
                "ville": "Rommani",
                "region": 10
            },
        
            {
                "id": 260,
                "ville": "Sidi Bouknadel",
                "region": 10
            },
            {
                "id": 261,
                "ville": "Skhirat",
                "region": 10
            },
            {
                "id": 262,
                "ville": "Tamesna",
                "region": 10
            },
            {
                "id": 263,
                "ville": "Témara",
                "region": 10
            },
           
            {
                "id": 265,
                "ville": "Tiflet",
                "region": 10
            },
            {
                "id": 266,
                "ville": "Touarga",
                "region": 10
            },
            {
                "id": 267,
                "ville": "Agadir",
                "region": 11
            },
           
            {
                "id": 270,
                "ville": "Aït Melloul",
                "region": 11
            },
           
            {
                "id": 291,
                "ville": "Inezgane",
                "region": 11
            },
           
            {
                "id": 293,
                "ville": "Kelaat-M'Gouna",
                "region": 11
            },
           
            {
                "id": 300,
                "ville": "Ouarzazate",
                "region": 11
            },
           
            {
                "id": 304,
                "ville": "Sidi Ifni",
                "region": 11
            },
           
            {
                "id": 307,
                "ville": "Tafraout",
                "region": 11
            },
            {
                "id": 308,
                "ville": "Taghzout",
                "region": 11
            },
            
            {
                "id": 319,
                "ville": "Tiznit",
                "region": 11
            },
           
            {
                "id": 321,
                "ville": "Zagora",
                "region": 11
            },
          
            {
                "id": 324,
                "ville": "Azilal",
                "region": 12
            },
        
            {
                "id": 327,
                "ville": "Béni Mellal",
                "region": 12
            },
            {
                "id": 328,
                "ville": "Bin elouidane",
                "region": 12
            },
           
            {
                "id": 332,
                "ville": "Demnate",
                "region": 12
            },
            
            {
                "id": 334,
                "ville": "El Ksiba",
                "region": 12
            },
           
            {
                "id": 336,
                "ville": "Fquih Ben Salah",
                "region": 12
            },
            {
                "id": 337,
                "ville": "Kasba Tadla",
                "region": 12
            },
          
            {
                "id": 343,
                "ville": "Souk Sebt Oulad Nemma",
                "region": 12
            },
            {
                "id": 344,
                "ville": "Zaouïat Cheikh",
                "region": 12
            },
            {
                "id": 345,
                "ville": "Tanger\u200e",
                "region": 13
            },
            {
                "id": 346,
                "ville": "Tétouan\u200e",
                "region": 13
            },
            {
                "id": 347,
                "ville": "Akchour",
                "region": 13
            },
            {
                "id": 348,
                "ville": "Assilah",
                "region": 13
            },
          
            {
                "id": 352,
                "ville": "Chefchaouen",
                "region": 13
            },
          
            {
                "id": 355,
                "ville": "Fnideq",
                "region": 13
            },
          
            {
                "id": 357,
                "ville": "Jebha",
                "region": 13
            },
          
            {
                "id": 360,
                "ville": "Ksar El Kébir",
                "region": 13
            },
            {
                "id": 361,
                "ville": "Larache",
                "region": 13
            },
            {
                "id": 362,
                "ville": "M'diq",
                "region": 13
            },
            {
                "id": 363,
                "ville": "Martil",
                "region": 13
            },
           
            {
                "id": 365,
                "ville": "Oued Laou",
                "region": 13
            },
           
            {
                "id": 367,
                "ville": "Ouezzane",
                "region": 13
            },
                     {
                "id": 374,
                "ville": "Al Hoceïma\u200e",
                "region": 14
            },
           
           
            {
                "id": 379,
                "ville": "Guercif\u200e",
                "region": 14
            },
           
            {
                "id": 397,
                "ville": "Laayoune\u200e",
                "region": 15
            },
         
            {
                "id": 399,
                "ville": "Tarfaya\u200e",
                "region": 15
            },
            {
                "id": 400,
                "ville": "Boujdour\u200e",
                "region": 15
            },
        
            {
                "id": 402,
                "ville": "Oued-Eddahab ",
                "region": 16
            },
            {
                "id": 403,
                "ville": "Stehat",
                "region": 13
            }
        ];
      }
    }