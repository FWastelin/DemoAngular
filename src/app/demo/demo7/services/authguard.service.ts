import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../demo6/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  // appuyer sur autguardService :ctrl ; quand il est souligné pour afficher la methode qui va avec
  constructor(
    private _authService : AuthService,
    private _route : Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this._authService.isAuth){
      return true;
    } else {
      this._route.navigate(['/demo/demo6']); //je le renvoie à la page de connection
    }
  }
}
