import { Component } from '@angular/core';
import { Hero } from './hero-detail/Hero';
import { HeroService } from './hero-detail/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})



export class HeroComponent {
  aHeroes:Hero[];
  oSelectedHero: Hero;
  onSelect(hero: Hero): void {//ts规定的要写明函数返回值类型？
    this.oSelectedHero = hero;
  }
  constructor(private heroService: HeroService,
              private router: Router) {};
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.aHeroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void{
    this.router.navigate(['/detail', this.oSelectedHero.id]);
  }
}
