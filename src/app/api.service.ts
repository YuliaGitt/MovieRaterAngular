import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseurl = 'http://127.0.0.1:8000/api/movies/';
headers = new HttpHeaders({
  'Content-Type' : 'application/lson',
  Authorization : 'token 56ea183db519b7cc139b7476425a7de3fec65af3'
}
  
)


  private movies = ['After', 'Bad Trip'];

  constructor(private httpClient : HttpClient){}

  getMovies(){
    return this.httpClient.get(this.baseurl, {headers : this.headers})
  }
}

