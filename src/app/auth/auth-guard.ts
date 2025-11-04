import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModule } from './auth-module'; 

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
    
      if (typeof (this.authModule as any).isLoggedIn === 'function' && (this.authModule as any).isLoggedIn()) {
      return true; 
    } else {
      console.log('Acceso denegado - Redirigiendo a Login');
      this.router.navigate(['/login']);
      return false; 
    }
  }
}