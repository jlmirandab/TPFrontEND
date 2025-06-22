import { Component } from '@angular/core';
import { Buscador } from '../buscador/buscador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [Buscador,CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

}
