import { Component, Input } from '@angular/core';
import { Drink, DrinksResponse } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  
  @Input() item!: Drink;
  verDetalle(idDrink: string) {
    console.log('ID del trago:', idDrink);
    // Aquí puedes:
    // - Navegar a una ruta detalle
    // - Abrir un modal
    // - Llamar a un servicio
  }
}