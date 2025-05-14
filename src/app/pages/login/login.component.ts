import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  validarLogin() {
  if (this.loginForm.valid) {
    const formValues = this.loginForm.value;

    const datos = {
      nombre: formValues.nombre,
      contrasena: formValues.contrasena
    };

    this.http.post<any>('http://localhost:3000/login', datos)
      .subscribe({
        next: res => {
          if (res.accesoPermitido) {
            this.router.navigate(['/inicio']);
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: err => {
          console.error('Error al conectar con el servidor:', err);
          alert('Error en el servidor');
        }
      });
  }
}}
