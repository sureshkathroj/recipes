import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Favourites} from './favourites';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  baseURL = 'http://localhost:3000/'
 

  getFavourites(): Observable<Favourites[]>{
    return this.http.get<Favourites[]>(`${this.baseURL}favorites`);
    
  }

}
