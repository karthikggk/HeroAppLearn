import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
// import {HEROES} from '../model/mock-heroes'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }
  
  // private heroesUrl = 'http://localhost:53395/api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';
  //old method
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // } //stub

   // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //               .then(heroes => heroes.find(hero => hero.id === id));
  // }

  getHeroes():Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json() as Hero[])
                    .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json() as Hero)
                    .catch(this.handleError);
  }

  create(name:string):Promise<Hero>{
    return this.http
              .post(this.heroesUrl,
                JSON.stringify({name:name}), {headers: this.headers})
              .toPromise()
              .then(res => res.json() as Hero)
              .catch(this.handleError);
  }

  update(hero:Hero): Promise<Hero>{
    const url =`${this.heroesUrl}/${hero.id}`;
    return this.http
            .put(url,JSON.stringify(hero), {headers:this.headers})
            .toPromise()
            .then(()=> hero)
            .catch(this.handleError);
  }

  delete(id:number): Promise<void>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                  .toPromise()
                  //.then(() => null)
                  .catch(this.handleError);
  }

  private handleError(error: any):Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]>{
      return new Promise(resolve => {
        // simulated server latency with 2 sec delay
        setTimeout(() => resolve(this.getHeroes()),2000);
      });
  }

}
