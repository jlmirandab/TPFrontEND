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

}
