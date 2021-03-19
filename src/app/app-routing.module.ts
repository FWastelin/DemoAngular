import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { patch } from '@nebular/theme';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Demo4Component } from './demo/demo4/demo4.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import { AuthguardService } from './demo/demo7/services/authguard.service';
import { Demo8Component } from './demo/demo8/demo8.component';
import { NewUserComponent } from './demo/demo8/new-user/new-user.component';
import { Demo9Component } from './demo/demo9/demo9.component';
import { ExoComponent } from './exo/exo.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { Exo2Component } from './exo/exo2/exo2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
    {path : 'demo7', canActivate:[AuthguardService], component : Demo7Component},
    {path : 'demo8', component : Demo8Component},
    {path : 'demo8/new-user', component : NewUserComponent},
    {path : 'demo9', component : Demo9Component}
  ]},
  {path : 'exo', component : ExoComponent, children : [
    {path : 'exo1', component : Exo1Component},
    {path : 'exo2', component : Exo2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
