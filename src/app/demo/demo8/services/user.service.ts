import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    firstname : 'Lucifer',
    lastname : 'Morningstar',
    email : 'hell.lux@heaven.god'
  }]

  userSubject = new Subject<User[]>();//Subject = observe la liste
  
  emitUser(){//emitUser=pour être informé
    this.userSubject.next(this.users.slice());
  }
  addUser(user : User){
    this.users.push(user);
    this.emitUser();
  }
  

  constructor() { }
}
