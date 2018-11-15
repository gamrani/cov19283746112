export class User {
  public firstName : string;
  public lastName : string;
  public email: string;
  public phone : number;
  public password : string;
  public passwordConf : string;
  public sexe: string ;
  public birthday : Date;
    constructor(){
      this.firstName = "EL GAMRANI";
      this.lastName = "Youssef";
      this.email = "gamraniyoussef@gmail.com";
      this.phone = 0;
      this.password = "abc";
      this.sexe = "homme";
      this.birthday = new Date();
    }
   
  }