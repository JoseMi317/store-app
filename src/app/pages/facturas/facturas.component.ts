import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Factura {
  facturaNum: string;
  cliente: string;
  fecha: string;
  vendedor: string;
  neto: number;
  iva: number;
  total: number;
}

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  facturas: Factura[] = [
    { facturaNum: '888893', cliente: '', fecha: '07-05-2025', vendedor: 'Obed Alvarado', neto: 100.00, iva: 0.00, total: 100.00 },
    { facturaNum: '888892', cliente: '', fecha: '06-05-2025', vendedor: 'Obed Alvarado', neto: 544.00, iva: 0.00, total: 544.00 },
    { facturaNum: '888891', cliente: 'Lucía Nava', fecha: '04-05-2025', vendedor: 'Obed Alvarado', neto: 161432.00, iva: 0.00, total: 161432.00 },
    { facturaNum: '888890', cliente: 'Javier Renteria', fecha: '02-05-2025', vendedor: 'Obed Alvarado', neto: 3505.00, iva: 0.00, total: 3505.00 }
  ];

  totalRegistros = this.facturas.length;
}