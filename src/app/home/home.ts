import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../components/hero/hero';
import { About } from '../components/about/about';
import { Services } from '../components/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Services],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
  `,
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Cuando el componente se carga, si hay un fragment en la URL, hacemos scroll
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        // Pequeña espera para asegurar que el DOM esté renderizado
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    });
  }
}
