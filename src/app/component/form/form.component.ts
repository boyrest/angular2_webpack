import {Component} from '@angular/core';
import '../../../../public/css/styles.scss';
import { Article } from '../../model/Article';
@Component({
  selector: "app-form",
  templateUrl:"./form.component.html",
  styleUrls:['./form.component.scss']
})

export class FormIndexComponent{
  articles: Article[];
  constructor() {
      this.articles = [
          new Article('Angular 2', 'http://angular.io', 3),
          new Article('Fullstack', 'http://fullstack.io', 2),
          new Article('Angular Homepage', 'http://angular.io', 1),
      ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  getArticle(articles:Article):void{
    console.log("****");
    console.log(articles);
  }
}
