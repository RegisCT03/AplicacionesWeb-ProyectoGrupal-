import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard'; // Ruta corregida (convención)
import { AuthService } from './auth.service'; // <-- CORRECCIÓN: Importa AuthService, no AuthModule

// --- Mocks (simulaciones) de las dependencias ---

// 1. Simulamos el AuthService (Esto está bien)
class MockAuthService {
  isLoggedIn(): boolean {
    return true; 
  }
}

// 2. Simulamos el Router (Esto está bien)
class MockRouter {
  navigate(routes: string[]) {}
}

// --- Pruebas ---

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService; // <-- CORRECCIÓN: El tipo debe ser AuthService
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        // CORRECCIÓN: El 'provide' debe ser el TOKEN del servicio, no el módulo
        { provide: AuthService, useClass: MockAuthService }, 
        { provide: Router, useClass: MockRouter }
      ]
    });
    
    guard = TestBed.inject(AuthGuard);
    // CORRECCIÓN: Inyecta el AuthService
    authService = TestBed.inject(AuthService); 
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('debería permitir el acceso si el usuario está logueado', () => {
    // Ahora 'authService' es del tipo correcto y tiene el método 'isLoggedIn'
    spyOn(authService, 'isLoggedIn').and.returnValue(true); 
    
    const canActivate = guard.canActivate({} as any, {} as any);
    
    expect(canActivate).toBeTrue();
  });

  it('debería denegar el acceso y redirigir a /login si no está logueado', () => {
    // Ahora 'authService' es del tipo correcto y tiene el método 'isLoggedIn'
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    
    const routerSpy = spyOn(router, 'navigate'); 
    const canActivate = guard.canActivate({} as any, {} as any);
    
    expect(canActivate).toBeFalse();
    expect(routerSpy).toHaveBeenCalledWith(['/login']); 
  });
});