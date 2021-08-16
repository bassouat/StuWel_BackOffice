import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from '@app/article/create-article/create-article.component';
import { DisplayArticleComponent } from './display-article/article.component';


const routes: Routes = [
  { path: 'all', component: DisplayArticleComponent },
  { path: 'create', component: CreateArticleComponent },
  // children: [
  //   { path: 'login', component: LoginComponent },
  //   { path: 'register', component: RegisterComponent }
  // ]
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
