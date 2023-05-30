import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit{
  movies :Movie[]  = [];
  selectedMovie = null;
  editedMovie = null;
  
  constructor(private apiService : ApiService,
    private coockieService : CookieService,
    private router : Router){};

  ngOnInit(){
    const mrToken = this.coockieService.get('mr-Token');
    if (!mrToken){
      this.router.navigate([`/auth`])
    } else{
      this.apiService.getMovies().subscribe(
        data =>{
          this.movies = data;
        },
        error => console.log(error)
      );
    }
  }

  logout(){
    const mrToken = this.coockieService.delete('mr-Token');
    this.router.navigate([`auth/`])
  }

  selectMovie(movie: Movie){
    this.selectedMovie = movie;
    this.editedMovie = null;
    console.log("Selected: ",this.selectedMovie)
  }

  editMovie(movie:Movie){
    this.editedMovie = movie;
    this.selectedMovie = null;
    console.log("Edited: ",this.editedMovie)
  }
  
  newMovie() {
    this.editedMovie = {title:'',discription:''};
    this.selectedMovie = null;
  }

  deletedMovie(movie:Movie){
    this.apiService.deleteMovie(movie.id).subscribe(
      data => {
       this.movies = this.movies.filter(mov => mov.id !== movie.id)
      },
      error => console.log(error)
    )
  }

  movieCreated(movie:Movie){
    this.movies.push(movie);
  }
  movieUpdated(movie:Movie){
    const index = this.movies.findIndex(mov => mov.id === movie.id)
    if (index >= 0){
      this.movies[index]= movie 
    }
  }
}

