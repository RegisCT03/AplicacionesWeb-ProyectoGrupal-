// src/app/app.routes.ts

import { Routes } from '@angular/router';

// Importa tus componentes
import { LandingPage } from './pages/landing-page/landing-page';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register.component';
import { CitasComponent } from './pages/citas/citas';
import { AuthGuard } from './auth/auth-guard';

// Simplemente exporta la constante 'routes'
export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'citas', 
    component: CitasComponent,
  },
];