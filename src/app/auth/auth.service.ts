// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  /**
   * Este es el método que tu AuthGuard necesita.
   */
  isLoggedIn(): boolean {
    // Lógica real: Revisa si hay un token de sesión guardado.
    // Por ahora, usaremos localStorage como ejemplo.
    return !!localStorage.getItem('auth_token');
  }

  /**
   * Este es el método que tu LoginComponent necesita.
   */
  login(credentials: any): Observable<any> {
    // Aquí es donde harías tu llamada HTTP (HttpClient) a tu backend.
    // Por ahora, vamos a simular una respuesta exitosa.
    
    console.log('Simulando llamada API de login...');

    return of({ id: '1', name: 'Usuario', token: '12345-fake-token' }).pipe(
      delay(1000), // Simula un retraso de red
      tap(response => {
        // Guarda el token al iniciar sesión
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  /**
   * Un método para cerrar sesión
   */
  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}