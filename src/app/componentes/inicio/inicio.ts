import { Component, Inject, OnInit } from '@angular/core';
import { Drink, DrinksResponse } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../servicios/cocktail';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  currentDrink: Drink | null = null;
  isLoading = false;
  errorMessage: string | null = null;
  drink: any = null;

  constructor(private cocktailService: Cocktail) {}

  TraerRandomDrink() {
    this.isLoading = true;
    this.cocktailService.getRandomDrink().subscribe({
      next: (data) => {
        this.drink = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando trago:', err);
        this.isLoading = false;
      }
    });
  }
}

