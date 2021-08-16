import { Component, OnInit } from '@angular/core';
import { Article } from '@app/_models/article';
import { AccountService } from '@app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class DisplayArticleComponent implements OnInit {

  articles: any[] = [];
  articles$: Observable<Article[]>;

  constructor(private articleService: AccountService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticle();

    this.articleService.getAllArticle().subscribe((values: Article[]) => {
      this.articles = values.map(val => {
        return val.data;
      });
      console.log("this.articles ", values.map(val => val.data));

    });
  }

}
