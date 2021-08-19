import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CreateRubriqueComponent } from './create-rubrique/create-rubrique.component';
import { RubriqueRoutingModule } from './rubrique-routing.module';
import { DisplayRubriqueComponent } from './display-rubrique/display-rubrique.component';
import { SafeHtmlPipe } from '@app/rubrique/safe-html.pipe';



@NgModule({
  declarations: [CreateRubriqueComponent, DisplayRubriqueComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    RubriqueRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RubriqueModule { }
