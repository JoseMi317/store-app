// usuario.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000'; // asegúrate de usar tu backend

  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  login(nombre: string, contrasena: string) {
    return this.http.post(`${this.apiUrl}/login`, { nombre, contrasena });
  }
}
