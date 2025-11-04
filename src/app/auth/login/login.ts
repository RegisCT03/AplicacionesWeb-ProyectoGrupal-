import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // <-- 1. Importa el Router
import { AuthService } from '../auth.service'; // <-- 2. Importa el AuthService

@Component({
  selector: 'app-login',
  // Corrección: Asegúrate de que el nombre del archivo sea el estándar
  templateUrl: './login.html', 
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  // Opcional: para mostrar un mensaje de error en el HTML
  loginError: string | null = null; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, // <-- 3. Inyécta el AuthService
    private router: Router          // <-- 4. Inyécta el Router
  ) { }

  ngOnInit(): void {
    // Inicializa el formulario reactivo
    this.loginForm = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    // Resetea el error en cada intento
    this.loginError = null; 

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Muestra errores si el form es inválido
      return;
    }

    // Llama al servicio de autenticación
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        // --- ¡ÉXITO! ---
        console.log('Inicio de sesión exitoso', response);
        
        // **AQUÍ ESTÁ LA REDIRECCIÓN**
        this.router.navigate(['/citas']);
      },
      (error) => {
        // --- ERROR ---
        console.error('Error en inicio de sesión', error);
        // Muestra un mensaje de error al usuario
        this.loginError = 'Correo electrónico o contraseña incorrectos.';
      }
    );
  }
}