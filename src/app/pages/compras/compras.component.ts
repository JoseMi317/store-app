import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';



export type Producto = {
  id: number;
  Nombre: string;
  Presentacion: string;
  IDCategoria: number;
  ID_Proveedor: number;
  Costo: number;
}

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})

export class ComprasComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;

  productos: Array<Producto> = [];
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    this.productoForm = this.fb.group({
      Codigo: ['', Validators.required],
      Nombre: ['', Validators.required],
      Presentacion: [''],
      IDCategoria: [0, Validators.required],
      ID_Proveedor: [0, Validators.required],
      Costo: [0, Validators.required],
      Descripcion: [''],
    });
  }

  ngOnInit() {
    this.cargarProductos();
  }

  abrirModal(): void {
    this.modalRef.nativeElement?.showModal();
  }

  cerrarModal(): void {
    this.modalRef.nativeElement?.close();
  }

  guardarProducto(): void {
    console.log(this.productoForm.value); 
    
    if (this.productoForm.valid) {
      this.productosService.agregarProducto(this.productoForm.value).subscribe({
        next: res => {
          console.log('Producto guardado:', res);
          this.cargarProductos();
          this.cerrarModal();
          this.productoForm.reset();
        },
        error: err => console.error('Error al guardar producto:', err)
      });
    } else {
      console.warn('Formulario no válido');
    }
  }

  cargarProductos(): void {
    console.log('Cargando productos...');
    this.productosService.getProductos().subscribe({
      next: productos => {
        this.productos = productos as any;
        console.log('Productos cargados:', this.productos);
      },
      error: err => console.error('Error al cargar productos:', err)
    });
  }
}
