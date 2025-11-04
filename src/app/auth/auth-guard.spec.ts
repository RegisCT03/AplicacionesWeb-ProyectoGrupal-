import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard'; 
import { AuthService } from './auth.service'; 


class MockAuthService {
  isLoggedIn(): boolean {
    return true; 
  }
}

class MockRouter {
  navigate(routes: string[]) {}
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService; 
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService }, 
        { provide: Router, useClass: MockRouter }
      ]
    });
    
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService); 
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('debería permitir el acceso si el usuario está logueado', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true); 
    
    const canActivate = guard.canActivate({} as any, {} as any);
    
    expect(canActivate).toBeTrue();
  });

  it('debería denegar el acceso y redirigir a /login si no está logueado', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    
    const routerSpy = spyOn(router, 'navigate'); 
    const canActivate = guard.canActivate({} as any, {} as any);
    
    expect(canActivate).toBeFalse();
    expect(routerSpy).toHaveBeenCalledWith(['/login']); 
  });
});