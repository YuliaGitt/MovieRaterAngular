import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  constructor(private apiservice : ApiService){};


  @Input() movie : any;
  @Output() updateMovie = new EventEmitter();
  rateEnterNum = 0 ;


  rateEnter(rate:number){
    this.rateEnterNum = rate
  }
  rateClick(rate:any){
    this.apiservice.rateMovie(rate,this.movie.id).subscribe(
      resault => this.getUpdate(),
      error => console.log(error)
    )
  }
  getUpdate(){
    this.apiservice.getMovie(this.movie.id).subscribe(
      movie => this.updateMovie.emit(movie),
      error => console.log(error)
    )
  }
}
