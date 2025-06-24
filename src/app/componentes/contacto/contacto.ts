import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
    nombre: string = "";
    email: string = "";
    mensaje: string ="";
  

  enviarFormulario(form : NgForm) {
    console.log("Nombre:" + this.nombre + " Correo: " + this.email + " Mensaje: " + this.mensaje);
    alert('Formulario enviado con éxito');
    form.resetForm();
  }
}
