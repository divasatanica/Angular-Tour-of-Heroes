import { Component } from '@angular/core';
import { Hero } from './hero-detail/Hero';
import { HeroService } from './hero-detail/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})



export class AppComponent {
  aHeroes:Hero[];
  sTitle = "Tour of Heroes";
  oSelectedHero: Hero;
  onSelect(hero: Hero): void {//ts规定的要写明函数返回值类型？
    this.oSelectedHero = hero;
  }
  constructor(private heroService: HeroService) {};
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.aHeroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
