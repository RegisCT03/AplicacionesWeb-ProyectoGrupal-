import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from '../../shared/footer/footer'; 

@Component({
  selector: 'app-citas',
  standalone: true, 
  imports: [
    CommonModule,    
    FooterComponent  
  ],
  templateUrl: './citas.html', 
  styleUrls: ['./citas.css'] ,
})
export class CitasComponent {

  fechaSeleccionada: string = "Lunes 20 de Octubre del 2025";
  
  horariosMatutinos = [
    { hora: '10:00am - 11:00am', disponible: true },
    { hora: '11:00am - 12:00pm', disponible: true },
    { hora: '12:00pm - 1:00pm', disponible: true },
    { hora: '1:00pm - 2:00pm', disponible: true },
  ];

  horariosVespertinos = [
    { hora: '4:00pm - 5:00pm', disponible: true },
    { hora: '5:00pm - 6:00pm', disponible: true },
    { hora: '6:00pm - 7:00pm', disponible: false },
    { hora: '7:00pm - 8:00pm', disponible: false },
  ];

  tiposDeMasaje = [
    {
      nombre: 'Masaje Deportivo',
      descripcion: 'Libera tensiones profundas, mejora el rendimiento y acelera la recuperación muscular.',
      precio: 50,
      icono: 'deportivo.svg'
    },
    {
      nombre: 'Masaje Terapéutico',
      descripcion: 'Alivia dolores específicos y rehabilita lesiones para restaurar tu movilidad.',
      precio: 55,
      icono: 'terapeutico.svg'
    },
    {
      nombre: 'Masaje de Revisión',
      descripcion: 'Evalúa tu condición muscular para crear un plan de tratamiento personalizado.',
      precio: 45,
      icono: 'revision.svg'
    },
    {
      nombre: 'Masaje Linfático',
      descripcion: 'Estimula tu sistema inmunológico, reduce hinchazón y promueve la desintoxicación.',
      precio: 60,
      icono: 'linfatico.svg'
    }
  ];

  // --- VARIABLES DE ESTADO ---
  horarioActivo: string | null = null;
  masajeSeleccionado: any | null = null; 
  pagoExitoso: boolean = false; // <-- NUEVO: Controla el modal de recibo

  // --- DATOS DEL RECIBO (EJEMPLO) ---
  ubicacion: string = "Calle Ficticia 123, Colonia Centro";

  constructor() { }

  // --- MÉTODOS DE FLUJO ---

  /**
   * ESTADO 1: Se llama al hacer clic en una hora.
   * Guarda la hora y abre el modal de "Selección de Masaje".
   */
  seleccionarHorario(horario: { hora: string, disponible: boolean }): void {
    if (!horario.disponible) return;
    this.horarioActivo = horario.hora;
  }

  /**
   * ESTADO 2: Se llama al hacer clic en un tipo de masaje.
   * Guarda el masaje seleccionado.
   */
  seleccionarMasaje(masaje: any): void {
    this.masajeSeleccionado = masaje;
  }

  /**
   * ESTADO 3: Se llama al hacer clic en "Realizar Pago".
   * Simula el pago y abre el modal de "Recibo".
   */
  realizarPago(): void {
    if (!this.masajeSeleccionado) return;
    
    // ... Aquí iría la lógica de API de PayPal ...
    
    // Al simular éxito, cambiamos el estado
    this.pagoExitoso = true;
  }

  /**
   * Se llama desde el modal "Selección de Masaje" para volver a los horarios.
   */
  regresar(): void {
    this.horarioActivo = null;
    this.masajeSeleccionado = null;
  }

  /**
   * ESTADO 4: Se llama al hacer clic en "Continuar" en el recibo.
   * Cierra todos los modales y resetea el estado.
   */
  cerrarRecibo(): void {
    this.pagoExitoso = false;
    this.horarioActivo = null;
    this.masajeSeleccionado = null;
  }
}