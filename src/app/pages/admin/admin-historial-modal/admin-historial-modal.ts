import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CitaHistorial {
  cliente: string;
  fecha: string;
  hora: string;
  servicio: string;
  precio: string;
  icono: string;
}

@Component({
  selector: 'app-admin-historial-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-historial-modal.html',
  styleUrl: './admin-historial-modal.css'
})
export class AdminHistorialModalComponent {
  @Output() close = new EventEmitter<void>();

  citas: CitaHistorial[] = [
    {
      cliente: 'Juan Alberto Pérez Castro',
      fecha: '15-Oct-2025',
      hora: '10:00am - 11:00am',
      servicio: 'Masaje Deportivo',
      precio: '$80',
      icono: '💆‍♂️'
    },
    {
      cliente: 'Marco Ziaurella Fabián de la Mora',
      fecha: '12-Oct-2025',
      hora: '12:00pm - 1:00pm',
      servicio: 'Masaje Terapéutico',
      precio: '$80',
      icono: '💆'
    },
    {
      cliente: 'Ana María González',
      fecha: '10-Oct-2025',
      hora: '4:00pm - 5:00pm',
      servicio: 'Masaje de Revisión',
      precio: '$60',
      icono: '🔍'
    },
    {
      cliente: 'Carlos Mendoza López',
      fecha: '08-Oct-2025',
      hora: '11:00am - 12:00pm',
      servicio: 'Masaje Linfático',
      precio: '$90',
      icono: '💧'
    },
    {
      cliente: 'Laura Fernández Ruiz',
      fecha: '05-Oct-2025',
      hora: '1:00pm - 2:00pm',
      servicio: 'Masaje Deportivo',
      precio: '$80',
      icono: '💆‍♂️'
    }
  ];

  closeModal() {
    this.close.emit();
  }

  imprimir() {
    window.print();
    console.log('Imprimir historial');
  }
}