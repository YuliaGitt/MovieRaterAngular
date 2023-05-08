import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movie : any = [];

  @Input() movies : any = [];
  @Output() selectMovie = new EventEmitter();

  

  constructor(private apiService : ApiService){}

  ngOnInit() { }

  movieClicked(movie:any){
    this.selectMovie.emit(movie)
  }

}


