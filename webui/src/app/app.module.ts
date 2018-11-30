import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpService} from './services/http.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import {AppConfig} from './app.config';
//import {MovieService} from './services/movie.service';
import {PetService} from './services/pet.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {DashboardComponent} from './dashboard/dashboard.component';
//import { MovieformComponent } from './movieform/movieform.component';
import {DashboardComponent} from './pets/dashboard.component';
import { PetformComponent } from './petform/petform.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    //MovieformComponent
    PetformComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [AppConfig, MovieService],
  providers: [AppConfig, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
