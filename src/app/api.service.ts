import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class ApiService {

baseurl = 'http://127.0.0.1:8000/api/movies/';
headers = new HttpHeaders({
  'Content-Type' : 'application/json',
  Authorization : 'token 56ea183db519b7cc139b7476425a7de3fec65af3' 
})

  constructor(private httpClient : HttpClient){}

  getMovies(){
    return this.httpClient.get(this.baseurl, {headers : this.headers})
  }
  getMovie(movieId:number){
    return this.httpClient.get(`${this.baseurl}${movieId}/`, {headers : this.headers})
  }
  rateMovie(rate:any,movieId:number){
    const body = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseurl}${movieId}/rate_movie/`,body, {headers : this.headers})
  }
}

