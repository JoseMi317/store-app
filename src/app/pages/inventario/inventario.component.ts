import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;

  abrirModal(): void {
    if (this.modalRef && this.modalRef.nativeElement) {
      this.modalRef.nativeElement.showModal();
    }
  }

  cerrarModal(): void {
    if (this.modalRef && this.modalRef.nativeElement) {
      this.modalRef.nativeElement.close();
    }
  }
}
