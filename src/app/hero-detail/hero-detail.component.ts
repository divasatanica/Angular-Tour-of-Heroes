import { Component, OnInit, Input} from '@angular/core';//Input用来让父模块往子模块传递内容;
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})


export class HeroDetailComponent implements OnInit {
  ngOnInit() {
  }
  @Input() oHero: Hero;
}
