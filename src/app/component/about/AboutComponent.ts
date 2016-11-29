import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'about',
  templateUrl: './AboutComponent.html'
})
export class AboutComponent {
  id:string;
  description:string;
  constructor(private route:ActivatedRoute){
    route.params.subscribe(param =>{this.id = param['id'];});
    this.description = "Hello everyone,let's go start this angular2 project";
  }
}
