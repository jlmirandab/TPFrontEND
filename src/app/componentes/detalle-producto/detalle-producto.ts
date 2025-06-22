import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../servicios/cocktail';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cocktailModel } from '../../models/cocktail.model';


@Component({
  selector: 'app-detalle-producto',
  imports: [RouterLink, CommonModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProducto implements OnInit {
  
   constructor(private cocktailService: Cocktail) {}
  cocktail?: Cocktail;

  private _route=inject(ActivatedRoute);

  ngOnInit(): void {

    
    this._route.params.subscribe(
      {
        next:(params =>{
          
        })
      }
    )

  }



}
