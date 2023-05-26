import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Movie } from './models/Movie';


@Injectable({
    providedIn: 'root'
  })
export class ApiService {

baseurl = 'http://127.0.0.1:8000/';
baseMovieurl = `${this.baseurl}api/movies/`;
headers = new HttpHeaders({
  'Content-Type' : 'application/json',
  //Authorization : 'token 56ea183db519b7cc139b7476425a7de3fec65af3' 
})

  constructor(private httpClient : HttpClient){}

  getMovies(){
    return this.httpClient.get<Movie[]>(this.baseMovieurl, {headers : this.headers})
  }

  getMovie(movieId:number){
    return this.httpClient.get<Movie>(`${this.baseMovieurl}${movieId}/`, {headers : this.headers})
  }

  createMovie(title:string,description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseMovieurl}`,body, {headers : this.headers})
  }

  updateMovie(id:number, title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseMovieurl}${id}/`,body, {headers : this.headers})
  }

  deleteMovie(id){
      return this.httpClient.delete(`${this.baseMovieurl}${id}/`, {headers : this.headers})
    }

  rateMovie(rate:any,movieId:number){
    const body = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseMovieurl}${movieId}/rate_movie/`,body, {headers : this.headers})
  }

  loginUser(authData){
    const body = JSON.stringify({authData});
    return this.httpClient.post(`${this.baseurl}auth/`,body, {headers : this.headers})
  }
}

