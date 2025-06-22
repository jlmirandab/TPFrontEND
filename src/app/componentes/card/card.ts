import { Component, Input } from '@angular/core';
import { cocktailModel } from '../../models/cocktail.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  
  @Input() item!: cocktailModel;
  verDetalle(idDrink: string) {
    console.log('ID del trago:', idDrink);
    // Aquí puedes:
    // - Navegar a una ruta detalle
    // - Abrir un modal
    // - Llamar a un servicio
  }
}
