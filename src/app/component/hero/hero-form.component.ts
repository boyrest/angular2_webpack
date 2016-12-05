import {Component} from '@angular/core';
import {Hero} from '../../model/Hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls:['./hero-form.scss']
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    
    newHero() {
      this.model = new Hero(42, '', '');
    }
}
