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
  constructor (private router: Router){

  }
  verDetalle(id: string) {
    this.router.navigate(['/detalle-producto'], { queryParams: { id: id } });
  }
  
}