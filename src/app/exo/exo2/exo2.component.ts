import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './services/service.service';
import { Ajout } from '../exo2/models/ajout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {
  listAjout: Ajout[];
  ajoutForm : FormGroup;
  ajoutSubscription : Subscription;

  constructor(
    private _ServiceService : ServiceService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFormCourse();
    this.ajoutSubscription = this._ServiceService.userSubject.subscribe(
      (productFromService: Ajout[]) => {
        this.listAjout = productFromService;
      }
    );
    this._ServiceService.emitAjout();
  }
  initFormCourse(){
    this.ajoutForm = this._formBuilder.group({
      course: ['', Validators.required]
    })
  }
  onSubmitCourse(){
    const formValue = this.ajoutForm.value;
    const newAjout = new Ajout(
      formValue['course'],
      formValue['quantity']=1
    )
    this._ServiceService.addAjout(newAjout);
  }
  increase(qty : number) {
    this.listAjout[qty].quantity++
  }
  decrease(qty : number) {
    this.listAjout[qty].quantity--
  }
  deleteItem(qty : number) {
    const index = this.listAjout.indexOf(this.listAjout[qty]);
    if(index >=1){
      this.listAjout.splice(index, 1);
    }
  }
  
}

/*
Exercices 2:
Réaliser un pannier de course, un input, avec un bouton ajout.
ça ajoute automatiquement un élément, possédant 3 boutons,
1 pour augmanté de un ,
1 pour diminuer de un ,
1 pour supprimer tout et retirer l'élement de la liste,
si l'élément arrive à 0, je le supprime de la liste,
Fouiller sur le web pour voir comment fonctionne la confirm-box pour la supression
Bien penser à mettre tous les services nécessaires en place
*/