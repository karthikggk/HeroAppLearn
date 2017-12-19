import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../component/heroes/heroes.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HeroDetailComponent } from '../component/hero-detail/hero-detail.component';

const routes: Routes =[
  { path:'heroes',  component: HeroesComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path:'',  redirectTo: '/dashboard', pathMatch: 'full'  },
  { path:'detail/:id',  component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
