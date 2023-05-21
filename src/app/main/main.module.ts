import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {Routes, RouterModule} from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path : 'movies', component : MainComponent}
] ; 

@NgModule({
  declarations: [
    MainComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
  ]
})
export class MainModule { }
