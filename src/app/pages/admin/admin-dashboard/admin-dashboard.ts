import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTAR TODOS LOS MODALES
import { AdminCitaModalComponent } from '../admin-cita-modal/admin-cita-modal';
import { AdminHorarioModalComponent } from '../admin-horario-modal/admin-horario-modal';
import { AdminHistorialModalComponent } from '../admin-historial-modal/admin-historial-modal';
import { AdminServiciosModalComponent } from '../admin-servicios-modal/admin-servicios-modal';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminCitaModalComponent,
    AdminHorarioModalComponent,
    AdminHistorialModalComponent,
    AdminServiciosModalComponent
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboardComponent {
  selectedDate: Date = new Date(2025, 9, 20); // 20 de Octubre 2025
  selectedHorario: string = '10:00am - 11:00am';
  
  horarios: string[] = [
    '10:00am - 11:00am',
    '11:00am - 12:00pm',
    '12:00pm - 1:00pm',
    '1:00pm - 2:00pm',
    '4:00pm - 5:00pm',
    '5:00pm - 6:00pm',
    '6:00pm - 7:00pm',
    '7:00pm - 8:00pm'
  ];

  // Estados de los modales
  showCitaModal: boolean = false;
  showHorarioModal: boolean = false;
  showHistorialModal: boolean = false;
  showServiciosModal: boolean = false;

  // Métodos para abrir modales desde los horarios
  selectHorario(horario: string) {
    this.selectedHorario = horario;
    this.showCitaModal = true;
  }

  openHorarioModal() {
    this.showHorarioModal = true;
  }

  // Métodos para navegar a otras vistas
  navegarHistorial() {
    this.showHistorialModal = true;
  }

  navegarServicios() {
    this.showServiciosModal = true;
  }

  // Métodos para cerrar modales
  closeCitaModal() {
    this.showCitaModal = false;
  }

  closeHorarioModal() {
    this.showHorarioModal = false;
  }

  closeHistorialModal() {
    this.showHistorialModal = false;
  }

  closeServiciosModal() {
    this.showServiciosModal = false;
  }

  // Método auxiliar para formatear la fecha
  getFechaFormateada(): string {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const diaSemana = dias[this.selectedDate.getDay()];
    const dia = this.selectedDate.getDate();
    const mes = meses[this.selectedDate.getMonth()];
    const año = this.selectedDate.getFullYear();
    
    return `${diaSemana} ${dia} de ${mes} del ${año}`;
  }
}