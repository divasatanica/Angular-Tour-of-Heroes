import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/Hero';
import { HeroService } from '../hero-detail/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aHeroes: Hero [] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.aHeroes = heroes.slice(1, 5));
  }

}
