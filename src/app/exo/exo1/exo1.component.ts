import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {
  MonChrono : number = 0;
  interval;
  startDisabled : boolean = false;
  stopDisabled : boolean = true;
  restDisabled : boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  starTime(){
    this.startDisabled = true;
    this.stopDisabled = false;
    this.restDisabled = false;
    this.interval = setInterval(() =>
    this.MonChrono++, 1000);
  }
  reseTime(){
    this.startDisabled = false;
    this.stopDisabled = true;
    this.restDisabled = true;
    this.MonChrono = 0;
    clearInterval(this.interval);
  }
  stopTime(){
    this.startDisabled = false;
    this.stopDisabled = true;
    this.restDisabled = false;
    clearInterval(this.interval);
  }
}

/* 
Chrono:
Dans cet exercice je demande un chrono,
j'affiche le temps qui c'est déroulé, 
un bouton pour démarrer le chrono, 
un bouton pour le suspendre, 
un bouton reset
le bouton stop et le bouton reset ne peuvent pas être activer si le chrono est à 0
le bouton start ne peut être actif si le chrono est en cours
etc...
*/