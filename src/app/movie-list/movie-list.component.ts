import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movie : any = [];

  @Input() movies : Movie[] = [];
  @Output() selectMovie = new EventEmitter<Movie>();
  @Output() editedMovie = new EventEmitter<Movie>();
  @Output() newMovie = new EventEmitter();
  @Output() deletedMovie = new EventEmitter<Movie>();

  constructor(private apiService : ApiService){}

  ngOnInit() { }

  movieClicked(movie:Movie){
    this.selectMovie.emit(movie)
  }
  movieEdit(movie:Movie){
    this.editedMovie.emit(movie)
  }
  createMovie(){
    this.newMovie.emit()
  }

  deleteMovie(movie:Movie){
    this.deletedMovie.emit(movie)}
}