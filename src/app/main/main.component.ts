import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit{
  movies :any  = [];
  selectedMovie = null;
  editedMovie = null;
  
  constructor(private apiService : ApiService){ }

  ngOnInit(){
    this.apiService.getMovies().subscribe(
      data =>{
        this.movies = data;
      },
      error => console.log(error)
    )
  }

  selectMovie(movie:any){
    this.selectedMovie = movie;
    this.editedMovie = null;
    console.log("Selected: ",this.selectedMovie)
  }

  editMovie(movie:any){
    this.editedMovie = movie;
    this.selectedMovie = null;
    console.log("Edited: ",this.editedMovie)
  }
  
  newMovie(){
    this.editedMovie = null;
    this.selectedMovie = null;
  }
}
