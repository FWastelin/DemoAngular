import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;

  constructor() { }

  signIn(){
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          if(this.isAuth){
            resolve(console.log("connecté"));
          }else{
            reject(console.log("déconnecté"));
          }
        },2000);
      }
    )   
  }
  signOut(){
    this.isAuth = false;
    return this.isAuth;
  }
}
