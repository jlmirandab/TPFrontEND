import { Component,OnInit, inject } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { Drink, } from '../../models/product.model';
import { Cocktail } from '../../servicios/cocktail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProducto implements OnInit {
  drink: any;
  isLoading = true;

    constructor(
    private route: ActivatedRoute,
    private cocktailService: Cocktail
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadDrinkDetails(id);
      }
    });
  }

  private loadDrinkDetails(id: string) {
    this.cocktailService.getDrinkById(id).subscribe({
      next: (data) => {
        this.drink = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading drink:', err);
        this.isLoading = false;
      }
    });
  }
}
