import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  tab: 'contacto' | 'direccion' = 'contacto'; 

  private formBuilder = inject(FormBuilder);

  @ViewChild('ventasModal') ventasModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('buscarModal') buscarModal!: ElementRef<HTMLDialogElement>;

  formularioVentas = new FormGroup({
    contacto_nombres: new FormControl(''),
    contacto_apellidos: new FormControl(''),
    contacto_correo: new FormControl(''),
    contacto_telefono: new FormControl(''),
    direccion_calle: new FormControl(''),
    direccion_ciudad: new FormControl(''),
    direccion_municipio: new FormControl(''),
  });

  onSubmit() {
    console.log('Formulario enviado:', this.formularioVentas.value);
    this.ventasModal.nativeElement.close();
  }

  abrirModalVentas() {
    this.tab = 'contacto'; 
    if (this.ventasModal) {
      this.ventasModal.nativeElement.showModal(); // Asegúrate de usar showModal()
    }
  }

  cerrarModalVentas() {
    if (this.ventasModal) {
      this.ventasModal.nativeElement.close();
    }
  }

  abrirModalBuscar() {
    this.buscarModal.nativeElement.showModal();
  }

  cerrarModalBuscar() {
    this.buscarModal.nativeElement.close();
  }

  filtrarProductos() {
    // Lógica para filtrar productos
  }
}
