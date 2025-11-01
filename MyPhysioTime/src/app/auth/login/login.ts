import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Importa tu servicio de autenticación cuando lo tengas
// import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Usamos '!' para asegurar a TS que lo inicializaremos

  constructor(
    private fb: FormBuilder
    // private authService: AuthService // Descomenta al crear tu servicio
  ) { }

  ngOnInit(): void {
    // Inicializamos el formulario
    this.loginForm = this.fb.group({
      // Definimos los controles y sus validadores
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Si el formulario es inválido, marca todos los campos como "tocados"
      // para que muestren sus errores (si los configuraste)
      this.loginForm.markAllAsTouched();
      return;
    }


    console.log('Formulario válido:', this.loginForm.value);
    
  }
}