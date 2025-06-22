import { Component, OnInit } from '@angular/core';
import { cocktailModel } from '../../models/cocktail.model';
import { Cocktail } from '../../servicios/cocktail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule,Card],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador implements OnInit{
  textBuscar : string = '';
  cocktails : cocktailModel[] = [] ;
  resultado : cocktailModel[] = [] ;

  constructor(private cockService : Cocktail){}

  ngOnInit(): void {
    this.cockService.getCocktails().subscribe(datos => {
      this.cocktails = datos;
      this.resultado = datos;
    });
  }
  buscar() {
    const filtro = this.textBuscar.toLocaleLowerCase();
    this.resultado = filtro ?
    this.cocktails.filter(c => c.strDrink.toLocaleLowerCase().includes(filtro))
    : this.cocktails
  }
}
