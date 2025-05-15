import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  indicadorVentas: number = 0;
  indicadorCompras: number = 0;
  indicadorClientes: number = 0;


  ngOnInit() {
    this.obtenerTotalVentas();
    this.obtenerTotalCompras();
    this.obtenerTotalClientes();
  }

  obtenerTotalVentas() {
    // Llamar al servicio para obtener el total de ventas
    
    console.log('Llamando al servicio para obtener el total de ventas');
    
    return;

  }

  obtenerTotalCompras() {
    // Llamar al servicio para obtener el total de compras
    console.log('Llamando al servicio para obtener el total de compras');
    
    return;
  }

  obtenerTotalClientes() {
    // Llamar al servicio para obtener el total de clientes
    console.log('Llamando al servicio para obtener el total de clientes');
    return;
  }
}
