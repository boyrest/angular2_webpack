import {Component} from '@angular/core';
import {Hero} from '../../model/Hero';
import {HeroService} from './hero-form.service';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls:['./hero-form.scss'],
    providers:[HeroService]
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    constructor(private heroService: HeroService){

    }
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
      console.log(this.heroService.getHeroes());
      this.model = new Hero(42, '', '');
    }
}
