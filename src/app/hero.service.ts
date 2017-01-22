import { Injectable } from '@angular/core';
import { Hero } from './app.hero';

@Injectable()
export class HeroService {
	
	
  HEROES : Hero[] = [
	  new Hero(11, 'Mr. Nice'),
	  new Hero(12, 'Narco'),
	  new Hero(13, 'Bombasto'),
	  new Hero(14, 'Celeritas'),
	  new Hero(15, 'Magneta'),
	  new Hero(16, 'RubberMan'),
	  new Hero(17, 'Dynama'),
	  new Hero(18, 'Dr IQ'),
	  new Hero(19, 'Magma'),
	  new Hero(20, 'Tornado')
  ];

  getHeroes() : Promise<Hero[]> {
  	return Promise.resolve(this.HEROES);
  }

  getHeroesSlowly() : Promise<Hero[]> {
  	return new Promise(resolve => {
  		setTimeout(() => resolve(this.getHeroes()), 2000);
  	});
  }

  getHero(id : number) : Promise<Hero> {
  	return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

}