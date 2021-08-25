import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActeurComponent } from './create-acteur/create-acteur.component';
import { DisplayActeurComponent } from './display-acteur/display-acteur.component';

const routes: Routes = [
  { path: '', component: DisplayActeurComponent },
  { path: 'create', component: CreateActeurComponent },
  { path: '**', component: DisplayActeurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActeurRoutingModule { }
