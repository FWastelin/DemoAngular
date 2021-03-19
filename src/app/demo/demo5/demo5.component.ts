import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {
  maVariable : string;
  isToggled : boolean;
  list : string[];

  constructor() { }

  ngOnInit(): void {
    this.isToggled = false;
    this.list = ['pommes', 'fraise', 'mangue']
  }
  toggle(){
    this.isToggled = !this.isToggled; //passe de true à false et ext
  }

}
