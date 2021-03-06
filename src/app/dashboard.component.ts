import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector : 'my-dash',
	templateUrl : './dashboard.component.html',
	styleUrls : ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes : Hero[];

	constructor(private heroService : HeroService) {}

	ngOnInit() : void {
		this.getHeroes();
	}

	getHeroes() : void {
		 this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
}