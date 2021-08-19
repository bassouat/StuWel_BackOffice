import { Component, OnInit } from '@angular/core';
import { Article } from '@app/_models/article';
import { ClientHttpService } from '@app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class DisplayArticleComponent implements OnInit {

  articles: any[] = [];
  articles$: Observable<Article[]>;

  constructor(private articleService: ClientHttpService) { }

  ngOnInit(): void {
    //this.articles$ = this.articleService.getAllArticle();

    this.articleService.getAllArticle().subscribe((values) => {
      this.articles = values;
      console.log("this.articles ", this.articles);
    });
  }

}
