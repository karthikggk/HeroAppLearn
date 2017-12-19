import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroService } from './services/hero.service';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {} from './in'

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http'
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // newly added line for [ngModel]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}


