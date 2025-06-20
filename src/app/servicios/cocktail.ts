import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cocktail {
   private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any> {
    return this.http.get(this.apiUrl);
  } 
}