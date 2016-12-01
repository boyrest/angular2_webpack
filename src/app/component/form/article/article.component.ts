import {Component,EventEmitter} from '@angular/core';
import '../../../../../public/css/styles.scss';
import { Article } from '../../../model/Article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    inputs: ['article'],
    outputs: ['articleEmit'],
    host: {
        class: 'row'
    }
})

export class ArticleComponent {
    article: Article;
    articleEmit: EventEmitter<Article>;
    constructor() {
        this.articleEmit = new EventEmitter<Article>();
    }
    voteUp() {
        this.article.voteUp();
        this.articleEmit.emit(this.article);
        return false;
    }
    voteDown() {
        this.article.voteDown();
        this.articleEmit.emit(this.article);
        return false;
    }

}
