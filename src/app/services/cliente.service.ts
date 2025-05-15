import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  obtenerClientes() {
    return this.http.get(this.apiUrl);
  }
eliminarCliente(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}


  agregarCliente(cliente: any) {
    return this.http.post(this.apiUrl, cliente);
    
  }
}
