import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ necesario para usar *ngIf y más

@Component({
  selector: 'app-ventas',
  standalone: true, // opcional, si estás usando componentes standalone
  imports: [CommonModule], // ✅ aquí se importa CommonModule
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  mostrarNuevoCliente = false;

  abrirFormularioCliente() {
    this.mostrarNuevoCliente = true;
  }

  cerrarFormularioCliente() {
    this.mostrarNuevoCliente = false;
  }
}
