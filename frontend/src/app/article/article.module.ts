import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DisplayArticleComponent } from './display-article/article.component';

@NgModule({
  declarations: [DisplayArticleComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
