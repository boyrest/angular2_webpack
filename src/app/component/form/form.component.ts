import {Component} from '@angular/core';
import '../../../../public/css/styles.scss';
@Component({
  selector: "app-form",
  templateUrl:"./form.component.html",
  styleUrls:['./form.component.scss']
})

export class FormIndexComponent{
  title = 'app works';
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
