import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  //criando variavel com parte principal da ulrl
  public apiPath = "https://api.themoviedb.org/3"

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  //criando metodo para pegar os ultimos filmes
  getLatestMovies(){
     return this.http.get(this.apiPath + "/movie/popular?api_key=90970ade90cf14cfaeeb4380af1017d5&language=pt-BR&page=1");
  }
}
