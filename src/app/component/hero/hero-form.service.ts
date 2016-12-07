import {Injectable} from '@angular/core';
import {Hero} from '../../model/Hero';
import {HEROES} from '../../mock/mock-heroes';

@Injectable()
export class HeroService{
  getHeroes(): Hero[]{
    return HEROES;
  }
}
