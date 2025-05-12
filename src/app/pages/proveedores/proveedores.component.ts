import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  tab: 'contacto' | 'direccion' = 'contacto';
  private formBuilder = inject(FormBuilder);

  @ViewChild('ProveedorModal') ProveedorModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('buscarModal') buscarModal!: ElementRef<HTMLDialogElement>;

  formularioProveedor = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    contacto_nombres: new FormControl(''),
    contacto_apellidos: new FormControl(''),
    contacto_correo: new FormControl(''),
    contacto_telefono: new FormControl(''),
    direccion_calle: new FormControl(''),
    direccion_ciudad: new FormControl(''),
    direccion_municipio: new FormControl(''),
  });

  onSubmit() {
    console.log('Formulario enviado:', this.formularioProveedor.value);
    this.cerrarModalProveedor();
  }

  abrirModalProveedor() {
    this.tab = 'contacto';
    this.ProveedorModal.nativeElement.showModal();
  }

  cerrarModalProveedor() {
    this.ProveedorModal.nativeElement.close();
  }

  abrirModalBuscar() {
    this.buscarModal.nativeElement.showModal();
  }

  cerrarModalBuscar() {
    this.buscarModal.nativeElement.close();
  }

  filtrarProveedor(event: Event) {
    const termino = (event.target as HTMLInputElement).value;
    console.log('Buscar:', termino);
    // Aquí podrías implementar la búsqueda con filtro
  }
}
