import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private  http: HttpClient) { }
  baseUrl= 'http://localhost:3000/recipes';

  getRecipe(id){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

}
