import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Movie } from './models/Movie';


@Injectable({
    providedIn: 'root'
  })
export class ApiService {

baseurl = 'http://127.0.0.1:8000/';
baseMovieurl = `${this.baseurl}api/movies/`;
headers = new HttpHeaders({
  'Content-Type' : 'application/json',
  'Authorization' : 'token 56ea183db519b7cc139b7476425a7de3fec65af3'
})

  constructor(private httpClient : HttpClient,
    private cookieServise: CookieService){};

  getMovies(){
    return this.httpClient.get<Movie[]>(this.baseMovieurl, {headers : this.getAuthHeaders()});
  }

  getMovie(movieId:number){
    return this.httpClient.get<Movie>(`${this.baseMovieurl}${movieId}/`, {headers : this.getAuthHeaders()});
  }

  createMovie(title:string,description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseMovieurl}`,body, {headers : this.getAuthHeaders()});
  }

  updateMovie(id:number, title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseMovieurl}${id}/`,body, {headers : this.getAuthHeaders()});
  }

  deleteMovie(id:number){
      return this.httpClient.delete(`${this.baseMovieurl}${id}/`, {headers : this.getAuthHeaders()});
    }

  rateMovie(rate:any,movieId:number){
    const body = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseMovieurl}${movieId}/rate_movie/`,body, {headers : this.getAuthHeaders()});
  }

  loginUser(authData){
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseurl}auth/`,body, {headers : this.headers});
  }

  registerUser(authData){
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseurl}api/user/`,body, {headers : this.headers});
  }

  getAuthHeaders() {
    //const token = '56ea183db519b7cc139b7476425a7de3fec65af3';
    const token = this.cookieServise.get('mr-Token');
    return new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : `token ${token}` 
    })
  }

}

