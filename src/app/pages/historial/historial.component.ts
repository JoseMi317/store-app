import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  standalone: true,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  modalAbierto = false;

  // Datos de prueba
  compras = [
    {
      fecha: '2023-10-01',
      proveedor: 'Proveedor 1',
      numero: '12345',
      total: '$100.00',
      productos: '5 guantes, 3 botas, 2 gabachas'
    },
    {
      fecha: '2023-11-12',
      proveedor: 'Proveedor 2',
      numero: '67890',
      total: '$250.00',
      productos: '10 mascarillas, 5 overoles'
    }
  ];

  compraSeleccionada: any = null;

  abrirModal(compra: any) {
    this.compraSeleccionada = compra;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.compraSeleccionada = null;
  }
}
