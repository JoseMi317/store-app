import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-compras',
  imports: [],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
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
