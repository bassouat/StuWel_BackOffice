import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTemoignageComponent } from './create-temoignage/create-temoignage.component';
import { DisplayTemoignageComponent } from './display-temoignage/display-temoignage.component';

const routes: Routes = [
  { path: '', component: DisplayTemoignageComponent },
  { path: 'create', component: CreateTemoignageComponent },
  { path: '**', component: DisplayTemoignageComponent }
  //{ path: 'create-sous-rubrique', component: SousRubriqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemoignageRoutingModule { }
