import {Component} from '@angular/core';
import '../../../../../public/css/styles.scss';
import { Article } from '../../../model/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  host: {
      class: 'row'
  }
})

export class ArticleComponent {
    article: Article;
    constructor() {
        this.article = new Article("Angular 2","www.baidu.com",10);
    }
    voteUp() {
        this.article.votes += 1;
        return false;
    }
    voteDown() {
        this.article.votes -= 1;
        return false;
    }

}
