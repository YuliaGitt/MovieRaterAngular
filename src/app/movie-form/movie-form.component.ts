import { Component , Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Movie } from '../models/Movie';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  
  movieForm;
  id = null;
  isDisabled: boolean = true;


  @Input() set movie(val:Movie){
      this.id = val.id;
      console.log(this.id);
      this.movieForm = new FormGroup({
      title : new FormControl(val.title),
      description : new FormControl(val.description)
    });
  };

  @Output() movieUpdated = new EventEmitter();
  @Output() movieCreated = new EventEmitter();

  constructor(private apiService : ApiService){}

  
  saveForm(){
    if (this.id){
    this.apiService.updateMovie(
      this.id,
      this.movieForm.value.title,
      this.movieForm.value.description).subscribe(
        (resault : Movie) => {
          this.movieUpdated.emit(resault);
        },
        error => console.log(error)
      )
    console.log("Saved update", this.movieForm.value);
  }
  else{
    this.apiService.createMovie(
      this.movieForm.value.title,
      this.movieForm.value.description).subscribe(
        (resault : Movie) => {
          this.movieCreated.emit(resault);
        },
        error => console.log(error)
      )
    console.log("Saved new movie", this.movieForm.value);
    this.movieForm.reset();
  }
}

onUserInput(event:any){
  // Get the input text
  let inputText = event.target.value;
  if(inputText==''){
    this.isDisabled = true;  // Make button disabled
  }
  else{
    this.isDisabled = false; // Make button enabled
  }
}
}