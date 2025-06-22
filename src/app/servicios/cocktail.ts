import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { cocktailModel } from '../models/cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class Cocktail {
   private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<cocktailModel[]> {
    return this.http.get<{drinks: cocktailModel[]}>(this.apiUrl).pipe(
      map(response => response.drinks)
    );
  } 
}