import { Component,OnInit } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<h1>
  {{title}}
</h1>
<br/>
<nav>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
</nav>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})



export class AppComponent implements OnInit{
  title = 'Tour of Heros';
  hero: Hero = {
    id : 1,
    name: 'WindStorm'
  };
  heroes: Hero[];
  selectedHero:Hero;
  constructor(private heroService: HeroService){};

  getHeroes():void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit():void{
    this.getHeroes();
  }
}

export class Hero{
  id : number;
  name : string;
};
