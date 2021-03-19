import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link : '/home', title:"Home", icon:'home'},
      {link : '/about', title:"About", icon:'alert-triangle'},
      {title : 'demo', icon:'book', children:[
        {link : '/demo/demo1', title: 'Demo 1 - property Bindings'},
        {link : '/demo/demo2', title: 'Demo 2 - Event Bindings et attributs'},
        {link : '/demo/demo3', title: 'Demo 3 - Pipes'},
        {link : '/demo/demo4', title: 'Demo 4 - Bindig Two Ways'},
        {link : '/demo/demo5', title: 'Demo 5 - Directive'},
        {link : '/demo/demo6', title: 'Demo 6 - Services'},
        {link : '/demo/demo7', title: 'Demo 7 - Guard'},
        {link : '/demo/demo8', title: 'Demo 8 - Formulaire'},
        {link : '/demo/demo9', title: 'Demo 9 - custom validator'}
      ]},
      {title : 'exo', icon:'book', children:[
        {link: '/exo/exo1', title: 'Exo1 - Chrono'},
        {link: '/exo/exo2', title: 'Exo2 - Pannier de courses'}
      ]}
      
    ];
  }

}
