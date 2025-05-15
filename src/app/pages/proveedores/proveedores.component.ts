import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  tab: 'contacto' | 'direccion' = 'contacto';
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);

  @ViewChild('ProveedorModal') ProveedorModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('buscarModal') buscarModal!: ElementRef<HTMLDialogElement>;

  proveedores: any[] = [];

  formularioProveedor = new FormGroup({
    contacto_nombres: new FormControl(''),
    contacto_correo: new FormControl(''),
    contacto_telefono: new FormControl(''),
    direccion_calle: new FormControl(''),
  });

  ngOnInit() {
    this.cargarProveedores();
  }

  // Cargar todos los proveedores
  cargarProveedores() {
    this.http
      .get<any[]>('http://localhost:3000/proveedores')
      .subscribe((data) => {
        this.proveedores = data;
      });
  }

  // Guardar nuevo proveedor
  onSubmit() {
    const nuevoProveedor = {
      Proveedor: this.formularioProveedor.value.contacto_nombres,
      Correo: this.formularioProveedor.value.contacto_correo,
      Telefono: this.formularioProveedor.value.contacto_telefono,
      Direccion: this.formularioProveedor.value.direccion_calle,
      FechaIngreso: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    };

    this.http
      .post('http://localhost:3000/proveedores', nuevoProveedor)
      .subscribe(() => {
        this.cargarProveedores(); // Refrescar lista
        this.formularioProveedor.reset(); // Limpiar formulario
        this.cerrarModalProveedor(); // Cerrar modal
      });
  }

  eliminarProveedor(id: number) {
    if (!confirm('¿Estás seguro de eliminar este proveedor?')) return;

    this.http
      .delete(`http://localhost:3000/proveedores/${id}`)
      .subscribe(() => {
        this.cargarProveedores();
      });
  }

  abrirModalProveedor() {
    this.tab = 'contacto';
    this.formularioProveedor.reset();
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
    const termino = (event.target as HTMLInputElement).value.toLowerCase();
    this.cargarProveedores(); // Recargar para evitar filtrado acumulativo
    this.proveedores = this.proveedores.filter((p) =>
      p.Proveedor.toLowerCase().includes(termino)
    );
  }
}
