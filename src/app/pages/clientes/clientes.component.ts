import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  tab: 'empresa' | 'contacto' | 'direccion' = 'empresa';

  private formBuilder = inject(FormBuilder);

  @ViewChild('ClientesModal') ClientesModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('ClientesModal')
  buscarModalCliente!: ElementRef<HTMLDialogElement>;

  formularioClientes = new FormGroup({
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
    console.log('Formulario enviado:', this.formularioClientes.value);
    this.ClientesModal.nativeElement.close();
  }

  abrirModalClientes() {
    this.tab = 'empresa';
    this.ClientesModal.nativeElement.showModal();
  }

  cerrarModalClientes() {
    this.ClientesModal.nativeElement.close();
  }

  abrirModalBuscarCliente() {
    this.buscarModalCliente.nativeElement.showModal();
  }

  cerrarModalBuscarCliente() {
    this.buscarModalCliente.nativeElement.close();
  }
}
