import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbIconModule, NbDatepickerModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { TotimePipe } from './pipes/totime.pipe';
import { Demo4Component } from './demo/demo4/demo4.component';
import { ExoComponent } from './exo/exo.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { AuthService } from './demo/demo6/services/auth.service';
import { Demo7Component } from './demo/demo7/demo7.component';
import { AuthguardService } from './demo/demo7/services/authguard.service';
import { Demo8Component } from './demo/demo8/demo8.component';
import { UserService } from './demo/demo8/services/user.service';
import { NewUserComponent } from './demo/demo8/new-user/new-user.component';
import { Demo9Component } from './demo/demo9/demo9.component';
import { Exo2Component } from './exo/exo2/exo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    TotimePipe,
    Demo4Component,
    ExoComponent,
    Exo1Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    NewUserComponent,
    Demo9Component,
    Exo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    ReactiveFormsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
