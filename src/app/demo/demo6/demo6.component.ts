import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {
  authStatus : boolean;

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    this.authStatus = this._authService.isAuth;
  }
  signIn() : void{
    this._authService.signIn().then(
      () => {
        this.authStatus = this._authService.isAuth;
      }
    )
  }
  signOut() : void{
    this._authService.signOut();
    this.authStatus = this._authService.isAuth;
  }

}
