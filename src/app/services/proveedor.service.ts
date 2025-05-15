import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private apiUrl = 'http://localhost:3000/proveedores';

  constructor(private http: HttpClient) {}

  obtenerProveedores() {
    return this.http.get(this.apiUrl);
  }

  agregarProveedor(proveedor: any) {
    return this.http.post(this.apiUrl, proveedor);
  }

  eliminarProveedor(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
