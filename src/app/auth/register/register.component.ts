import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Función validadora personalizada para confirmar contraseñas
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('contrasena');
  const confirmPassword = control.get('confirmarContrasena');

  if (!password || !confirmPassword) {
    return null; // Los controles aún no están disponibles
  }

  // Si ambas contraseñas están definidas y son diferentes, devuelve un error
  return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router // Inyecta el Router
    // private authService: AuthService // Descomenta al crear tu servicio
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numeroTelefonico: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ejemplo: 10 dígitos numéricos
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, { validators: passwordMatchValidator }); // Añade el validador de grupo aquí
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      console.log('Formulario inválido:', this.registerForm.errors);
      this.registerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
      return;
    }

    // El formulario es válido
    const { confirmarContrasena, ...formData } = this.registerForm.value; // Remueve 'confirmarContrasena' antes de enviar

    console.log('Datos de registro:', formData);

    // **Aquí es donde entra tu Arquitectura Hexagonal**
    // Llama a tu servicio de autenticación para registrar al usuario
    // this.authService.register(formData).subscribe(
    //   response => {
    //     console.log('Registro exitoso', response);
    //     this.router.navigate(['/login']); // Redirigir al login después del registro
    //   },
    //   error => {
    //     console.error('Error en el registro', error);
    //     // Mostrar un mensaje de error al usuario
    //   }
    // );

    // Para fines de prueba, si no tienes el servicio:
    alert('Usuario registrado con éxito (simulado)! Redireccionando a Login.');
    this.router.navigate(['/login']); 
  }

  // Método auxiliar para acceder fácilmente a los controles del formulario en el HTML (opcional pero útil)
  get f() { return this.registerForm.controls; }
}