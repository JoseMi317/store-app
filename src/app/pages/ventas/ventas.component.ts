import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ necesario para usar *ngIf y más
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  standalone: true, // opcional, si estás usando componentes standalone
  imports: [CommonModule, ReactiveFormsModule], // ✅ aquí se importa CommonModule
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  private formBuiler = inject(FormBuilder)

  formularioVentas = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
  });

  onSubmit(){
    console.log("Guardando datos...");
    console.log(this.formularioVentas.value);
    
  }
  
  

}
