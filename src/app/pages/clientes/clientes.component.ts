import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  tab: 'contacto' | 'direccion' = 'contacto';

  @ViewChild('ClientesModal') ClientesModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('buscarModal') buscarModal!: ElementRef<HTMLDialogElement>;

  clientesOriginal: any[] = [];
  clientes: any[] = [];

  formularioClientes: FormGroup;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) {
    this.formularioClientes = this.fb.group({
      contacto_nombres: [''],
      contacto_correo: [''],
      contacto_telefono: [''],
      direccion_calle: [''],
    });
  }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.obtenerClientes().subscribe({
      next: (data: any) => {
        console.log('Clientes desde backend:', data); // <-- console.log para debug
        this.clientesOriginal = data;
        this.clientes = data;
      },
      error: (err: any) => {
        console.error('Error al cargar clientes:', err);
      },
    });
  }

  onSubmit() {
    if (this.formularioClientes.valid) {
      const nuevoCliente = {
        Nombres: this.formularioClientes.value.contacto_nombres,
        Correo: this.formularioClientes.value.contacto_correo,
        telefono: this.formularioClientes.value.contacto_telefono,
        Direccion: this.formularioClientes.value.direccion_calle,
        FechaIngreso: new Date().toISOString().slice(0, 10), // Formato yyyy-mm-dd
      };

      this.clienteService.agregarCliente(nuevoCliente).subscribe({
        next: () => {
          alert('Cliente guardado');
          this.cerrarModalClientes();
          this.cargarClientes();
          this.formularioClientes.reset();
          this.tab = 'contacto';
        },
        error: (err: any) => {
          console.error('Error al guardar cliente:', err);
          alert('Error al guardar cliente');
        },
      });
    }
  }

  eliminarCliente(id: number) {
    if (confirm('¿Seguro que quieres eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => {
          alert('Cliente eliminado correctamente');
          this.cargarClientes(); // recarga la lista para actualizar la vista
        },
        error: (err) => {
          console.error('Error al eliminar cliente:', err);
          alert('Error al eliminar cliente');
        },
      });
    }
  }

  abrirModalClientes() {
    this.tab = 'contacto';
    this.ClientesModal.nativeElement.showModal();
  }

  cerrarModalClientes() {
    this.ClientesModal.nativeElement.close();
  }

  abrirModalBuscar() {
    this.buscarModal.nativeElement.showModal();
  }

  cerrarModalBuscar() {
    this.buscarModal.nativeElement.close();
  }

  filtrarCliente(event: Event) {
    const termino = (event.target as HTMLInputElement).value.toLowerCase();
    this.clientes = this.clientesOriginal.filter(c =>
      c.Nombres.toLowerCase().includes(termino) ||
      c.Correo.toLowerCase().includes(termino) ||
      c.Direccion.toLowerCase().includes(termino) ||
      c.telefono.toLowerCase().includes(termino)
    );
  }
}
