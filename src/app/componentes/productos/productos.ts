import { Component, Inject, OnInit } from '@angular/core';
import { Drink, DrinksResponse } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../servicios/cocktail';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
 currentDrink: Drink | null = null;  // Inicializada como null
 isLoading: boolean = false;   
  listadeTragos: Drink[]=[];

   constructor(private cocktailService: Cocktail) {}

  ngOnInit(): void {
    
    
  }

//*
//     getTragoID(id: string) {
//       this.cocktailService.getTragoByID(id).subscribe({
//         next: (data: any) => {
//       this.listadeTragos = data;
//         console.log('Trago por ID:', this.listadeTragos);
//     },
//     error: (error: any) => {
//       console.error('Error buscando trago por ID', error);
//     }
//   });
// }**/
}
