import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.swApi
@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private _http: HttpClient ) { }


  getMovies(){
    return this._http.get<any>(`${baseUrl}/films`)
   }
 
   getHeroes(capitulo:number){
     return this._http.get<any>(`${baseUrl}/people/${capitulo}`)
   }
   getNaves(capitulo:number){
     return this._http.get<any>(`${baseUrl}/vehicles/${capitulo}`)
   }
   getPlanetas(capitulo:number){
     return this._http.get<any>(`${baseUrl}/planets/${capitulo}`)
   }
}
