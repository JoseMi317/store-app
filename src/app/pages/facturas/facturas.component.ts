import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  fechaInicio: string = '';
  fechaFin: string = '';
  clienteSeleccionado: string = '';
  busqueda: string = '';
  paginaActual = 1;
registrosPorPagina = 10;

}
