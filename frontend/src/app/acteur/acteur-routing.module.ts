import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActeurComponent } from './create-acteur/create-acteur.component';

const routes: Routes = [
  //{ path: '', component: DisplayRubriqueComponent },
  { path: '', component: CreateActeurComponent },
  //{ path: 'create-sous-rubrique', component: SousRubriqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActeurRoutingModule { }
