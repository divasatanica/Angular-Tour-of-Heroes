import { Component, OnInit, Input} from '@angular/core';//Input用来让父模块往子模块传递内容;
import { Hero } from './hero';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})


export class HeroDetailComponent implements OnInit {
  ngOnInit(): void{
    this.router.params
        .switchMap((params:Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.oHero = hero);
  }
  @Input() oHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: ActivatedRoute,
    private location: Location
  ) {}
  goBack(): void{
    this.location.back();
  }
}
