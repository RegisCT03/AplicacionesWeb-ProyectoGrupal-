import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('contrasena');
  const confirmPassword = control.get('confirmarContrasena');

  if (!password || !confirmPassword) {
    return null;
  }

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
    private router: Router 
   ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numeroTelefonico: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, { validators: passwordMatchValidator }); 
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      console.log('Formulario inválido:', this.registerForm.errors);
      this.registerForm.markAllAsTouched(); 
    }

    const { confirmarContrasena, ...formData } = this.registerForm.value; 

    console.log('Datos de registro:', formData);

    alert('Usuario registrado con éxito (simulado)! Redireccionando a Login.');
    this.router.navigate(['/login']); 
  }

  get f() { return this.registerForm.controls; }
}