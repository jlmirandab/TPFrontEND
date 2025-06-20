import { Routes } from '@angular/router';
import { Inicio } from './componentes/inicio/inicio';
import { Productos } from './componentes/productos/productos';
import { DetalleProducto } from './componentes/detalle-producto/detalle-producto';
import { Contacto } from './componentes/contacto/contacto';

export const routes: Routes = [

    {path:'', loadComponent: ()=>import('./componentes/inicio/inicio').then(m=>Inicio)},
    {path:'productos', loadComponent: ()=>import('./componentes/productos/productos').then(m=>m.Productos)},
    {path:'detalle-producto', loadComponent: ()=>import('./componentes/detalle-producto/detalle-producto').then(m=>DetalleProducto)},
    {path:'contacto', loadComponent: ()=>import('./componentes/contacto/contacto').then(m=>Contacto)},
    {path: '**',redirectTo: '',pathMatch:'full'}
    
];
