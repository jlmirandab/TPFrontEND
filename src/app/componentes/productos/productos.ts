import { Component, Inject, OnInit } from '@angular/core';
import { Drink, DrinksResponse } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../servicios/cocktail';
import { Buscador } from '../buscador/buscador';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterLink,Buscador],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
 currentDrink: Drink | null = null; 
 isLoading: boolean = false;   
  listadeTragos: Drink[]=[];

   constructor(private cocktailService: Cocktail) {}

  ngOnInit(): void {
    
    
  }
}
