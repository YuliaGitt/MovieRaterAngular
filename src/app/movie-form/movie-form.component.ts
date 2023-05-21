import { Component , Input} from '@angular/core';
import { Movie } from '../models/Movie';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  
  movieForm;
  id = null;

  @Input() set movie(val:Movie){
      this.id = val.id;
      console.log(this.id)
      this.movieForm = new FormGroup({
      title : new FormControl(val.title),
      description : new FormControl(val.description)
    });
  };

  constructor(private apiService : ApiService){}

  saveForm(){
    if (this.id){
    this.apiService.updateMovie(
      this.id,
      this.movieForm.value.title,
      this.movieForm.value.description).subscribe(
        resault => console.log(resault),
        error => console.log(error)
      )
    console.log("Saved update", this.movieForm.value)
  }
  else{
    this.apiService.createMovie(
      this.movieForm.value.title,
      this.movieForm.value.description).subscribe(
        resault => console.log(resault),
        error => console.log(error)
      )
    console.log("Saved new movie", this.movieForm.value)
  }
  }}
