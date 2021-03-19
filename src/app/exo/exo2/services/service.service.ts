import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ajout } from '../models/ajout';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private ajouts: Ajout[] =[{
    course : 'pomme',
    quantity: 3
  }]
  
  userSubject = new Subject<Ajout[]>();//Subject = observe la liste
  
  emitAjout(){//emitAjout=pour être informé et attention de le relier sur le fichier exo2
    this.userSubject.next(this.ajouts.slice());
  }
  addAjout(ajout : Ajout){
    this.ajouts.push(ajout);
    this.emitAjout();
  }

  constructor() { }
}
