import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  login(credentials: any): Observable<any> {
    
    console.log('Simulando llamada API de login...');

    return of({ id: '1', name: 'Usuario', token: '12345-fake-token' }).pipe(
      delay(1000), 
      tap(response => {
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}