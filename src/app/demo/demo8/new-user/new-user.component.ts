import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  //je vais commencer par créer un objet de type Formgroup
  //ce qui va me permettre de récupérer tout un tas de méthode
  //ces méthodes vont me permettre de créer un groupde propriété dans mon formulaire
  //et je pourrai les réutiliser dans mon html
  userForm: FormGroup;

  //userservice permet d'avoir accés au méthode venant du userservice
  //router permet de rediriger vers ou àpartir d'une route
  //formBuilder= un service de Angular qui permet de créer formGroup

  constructor(
    private _userService : UserService,
    private _router : Router,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    //méthode ou j'initialise mon formGroup
    //je commence par initialiser le userForm avec le serviceformBuilder pour qu'il crée un group
    this.userForm = this._formBuilder.group({
            //dans ce group, je vais placer les nom des différents formcontrol
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['',[Validators.required, Validators.email]],
            films: this._formBuilder.array([])
    })
  }
  onSubmit(){
    //je récupére les infos dans mon formGroup
    const formValue = this.userForm.value;
    //je crée un new user qui prendra en paramétre les infos venant de formValue
    const newUser = new User(
      formValue['firstname'],
      formValue['lastname'],
      formValue['email'],
      //la liste étant nullable, je vais faire une ternaire, sui va me renvyer
      //soit ma liste, soit une liste vide
      formValue['films'] ? formValue['films'] : []
    )
    //je peux appeler mon servicepour l'ajouter à ma liste user
    this._userService.addUser(newUser);
    this._router.navigate(['demo/demo8']);
  }
  getFilms(){
    return this.userForm.get('films') as FormArray;
  }
  addFilms(){
    const newFilmControls = this._formBuilder.control('', Validators.required);
    this.getFilms().push(newFilmControls);
  }
}
