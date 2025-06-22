import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Drink, DrinksResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cocktail {
   private UrlRandom = 'https://www.thecocktaildb.com/api/json/v1/1';
  private UrlAllproducts = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
  constructor(private _httpClient: HttpClient) {}
  

  getRandomDrink(): Observable<any> {
    return this._httpClient.get(`${this.UrlRandom}/random.php`).pipe(
      map((response: any) => response.drinks[0]) 
    );
  }

    getCocktails(): Observable<Drink[]> {
    return this._httpClient.get<{drinks: Drink[]}>(this.UrlAllproducts).pipe(
      map(response => response.drinks)
    );
  } 

  } 