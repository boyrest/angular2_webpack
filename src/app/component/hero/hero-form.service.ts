
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Hero} from '../../model/Hero';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    constructor(private http: Http) {

    }
    getHeroes(): Promise<Hero[]> {
        //  return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
