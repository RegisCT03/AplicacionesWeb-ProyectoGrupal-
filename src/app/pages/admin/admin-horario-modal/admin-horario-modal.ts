import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-horario-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-horario-modal.html',
  styleUrl: './admin-horario-modal.css'
})
export class AdminHorarioModalComponent {
  @Input() fecha: string = '';
  @Input() horarios: string[] = [];
  @Input() horarioSeleccionado: string = '';
  @Output() close = new EventEmitter<void>();

  horarioActual: string = '';

  ngOnInit() {
    this.horarioActual = this.horarioSeleccionado;
  }

  closeModal() {
    this.close.emit();
  }

  selectHorario(horario: string) {
    this.horarioActual = horario;
  }

  habilitar() {
    console.log('Habilitar horario:', this.horarioActual);
    // Aquí iría la lógica para habilitar el horario
    this.closeModal();
  }

  deshabilitar() {
    console.log('Deshabilitar horario:', this.horarioActual);
    // Aquí iría la lógica para deshabilitar el horario
    this.closeModal();
  }
}