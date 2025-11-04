import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  precio: string;
  seleccionado: boolean;
}

@Component({
  selector: 'app-admin-servicios-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-servicios-modal.html',
  styleUrl: './admin-servicios-modal.css'
})
export class AdminServiciosModalComponent {
  @Output() close = new EventEmitter<void>();

  tituloModificar: string = '';
  precioModificar: string = '';

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Masaje Deportivo',
      descripcion: 'Libera tensiones profundas, mejora el rendimiento y acelera la recuperación muscular.',
      icono: '💆‍♂️',
      precio: '$80',
      seleccionado: false
    },
    {
      id: 2,
      nombre: 'Masaje Terapéutico',
      descripcion: 'Enfocado en aliviar dolores y mejorar la movilidad muscular.',
      icono: '💆',
      precio: '$80',
      seleccionado: false
    },
    {
      id: 3,
      nombre: 'Masaje de Revisión',
      descripcion: 'Evaluación completa de tu estado muscular para un plan de tratamiento personalizado.',
      icono: '🔍',
      precio: '$60',
      seleccionado: false
    },
    {
      id: 4,
      nombre: 'Masaje Linfático',
      descripcion: 'Estimula la circulación y fortalece tu sistema inmunológico.',
      icono: '💧',
      precio: '$90',
      seleccionado: false
    }
  ];

  closeModal() {
    this.close.emit();
  }

  seleccionarServicio(servicio: Servicio) {
    // Deseleccionar todos primero
    this.servicios.forEach(s => s.seleccionado = false);
    // Seleccionar el clickeado
    servicio.seleccionado = true;
    // Cargar datos en los campos
    this.tituloModificar = servicio.nombre;
    this.precioModificar = servicio.precio;
  }

  continuar() {
    console.log('Modificar servicio:', this.tituloModificar, this.precioModificar);
    // Aquí iría la lógica para guardar los cambios
    this.closeModal();
  }
}