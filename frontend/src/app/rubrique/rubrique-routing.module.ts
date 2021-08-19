import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRubriqueComponent } from './create-rubrique/create-rubrique.component';
import { DisplayRubriqueComponent } from './display-rubrique/display-rubrique.component';

const routes: Routes = [
  { path: '', component: DisplayRubriqueComponent },
  { path: 'create', component: CreateRubriqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubriqueRoutingModule { }
