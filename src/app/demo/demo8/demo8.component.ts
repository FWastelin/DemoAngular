import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User} from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  users : User[];
  userSubscription : Subscription;

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.userSubscription = this._userService.userSubject.subscribe(
      (userFromService: User[]) => {
        this.users = userFromService; //la fléche = une lambda qui va récupérer le tableau de user qui se trouve dans le service
      } 
    );
  //je dde à mon service de me renvoyer mon tabaleau d'utilisateur
  this._userService.emitUser();
  }
  //pour se désinscrire
  ngOnDestroy(): void{
    this.userSubscription.unsubscribe();
  }

}
