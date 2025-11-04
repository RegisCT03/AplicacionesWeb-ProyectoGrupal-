import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-cita-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-cita-modal.html',
  styleUrl: './admin-cita-modal.css'
})
export class AdminCitaModalComponent {
  @Input() horario: string = '';
  @Input() fecha: string = '';
  @Output() close = new EventEmitter<void>();

  // Datos de ejemplo de la cita
  citaData = {
    servicio: {
      nombre: 'Masaje Deportivo',
      descripcion: 'Libera tensiones profundas, mejora el rendimiento y acelera la recuperación muscular.',
      icono: '💆‍♂️'
    },
    cliente: {
      nombre: 'Juan Alberto Pérez Castro',
      telefono: '123 456 7890'
    }
  };

  closeModal() {
    this.close.emit();
  }

  imprimir() {
    window.print();
    console.log('Imprimir detalles de la cita');
  }

  continuar() {
    console.log('Continuar con la acción');
    this.closeModal();
  }
}