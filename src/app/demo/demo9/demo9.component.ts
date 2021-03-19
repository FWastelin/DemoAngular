import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {
  fg : FormGroup;

  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      //création d'un control de date avec un validators custom
      //date à par défauts une valeur null
      date : [null, this.notBefore(new Date(2000,1,1))]
    })
  }
  notBefore(date : Date) : ValidatorFn{
    return(control : FormControl) =>{
      if(control.value == null){
        return null
      }
      if(control.value.getTime() < date.getTime()){
        return{notBeforeError: "la date doit être supérieure au 01/01/2000"}
      }
      return null;
    }
  }

}
