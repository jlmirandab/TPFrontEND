import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Drink, DrinksResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cocktail {
   private Url = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private _httpClient: HttpClient) {}
  

      public getDrinksByLetter(letter: string): Observable<any[]> {
    return this._httpClient.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).pipe(
      map(res => res.drinks || [])
    );
  }

    public getDrinkById(id: string): Observable<Drink | null> {
    return this._httpClient.get<DrinksResponse>(`${this._httpClient}/lookup.php?i=${id}`).pipe(
      map(res => res.drinks ? res.drinks[0] : null)
    );
  }

    public searchDrinksByName(name: string): Observable<Drink[]> {
    return this._httpClient.get<DrinksResponse>(`${this._httpClient}/search.php?s=${name}`).pipe(
      map(res => res.drinks || [])
    );
  }

  getRandomDrink(): Observable<any> {
    return this._httpClient.get(`${this.Url}/random.php`).pipe(
      map((response: any) => response.drinks[0]) // Extrae el primer trago
    );
  }

  } 