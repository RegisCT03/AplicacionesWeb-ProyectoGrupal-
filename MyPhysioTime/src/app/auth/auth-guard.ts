import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModule } from './auth-module'; // Asegúrate de importar tu AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authModule: AuthModule,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Aquí está la magia:
    // Llamar a isLoggedIn si existe en authModule evitando error de compilación
    if (typeof (this.authModule as any).isLoggedIn === 'function' && (this.authModule as any).isLoggedIn()) {
      return true; // El usuario puede pasar
    } else {
      // El usuario no ha iniciado sesión, redirige a /login
      console.log('Acceso denegado - Redirigiendo a Login');
      this.router.navigate(['/login']);
      return false; // El usuario no puede pasar
    }
  }
}