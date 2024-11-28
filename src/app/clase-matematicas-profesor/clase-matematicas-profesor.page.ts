import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service'; // Asegúrate de que ApiService esté importado

@Component({
  selector: 'app-clase-matematicas-profesor',
  templateUrl: './clase-matematicas-profesor.page.html',
  styleUrls: ['./clase-matematicas-profesor.page.scss'],
})
export class ClaseMatematicasProfesorPage {
  alumnos: any[] = [];  // Lista de alumnos de la API
  alumnoSeleccionado: any = null;  // Alumno seleccionado
  dias: any[] = [];  // Asistencia del alumno seleccionado

  constructor(
    private router: Router,
    private alertController: AlertController,
    private apiService: ApiService // Inyectamos el servicio para obtener los datos de la API
  ) {}

  ngOnInit() {
    this.cargarAlumnos();  // Cargar los alumnos al iniciar
  }

  // Método para cargar la lista de alumnos desde la API
  cargarAlumnos() {
    this.apiService.getAlumnos().subscribe((alumnos: any[]) => {
      this.alumnos = alumnos;  // Guardamos la lista de alumnos
    });
  }

  // Método para cargar los días de asistencia del alumno seleccionado
  cargarAsistencia(alumnoId: number) {
    const asistencia = JSON.parse(localStorage.getItem(`asistencia_${alumnoId}`) || '[]');
    if (asistencia.length === 0) {
      // Si no hay asistencia guardada, generamos 30 días por defecto
      const fechaInicio = new Date();
      const faltasProbabilidad = 0.35;
      const dias = [];

      for (let i = 0; i < 30; i++) {
        const fecha = new Date(fechaInicio);
        fecha.setDate(fecha.getDate() + i);
        const falta = Math.random() < faltasProbabilidad;

        dias.push({
          fecha: fecha,
          falta: falta
        });
      }

      // Guardamos la asistencia generada en localStorage
      localStorage.setItem(`asistencia_${alumnoId}`, JSON.stringify(dias));
      this.dias = dias; // Cargamos los días generados
    } else {
      this.dias = asistencia;
    }
  }

  // Método para marcar al alumno como presente
  marcarAsistio(dia: any) {
    dia.falta = false;
    this.actualizarAsistencia(); // Actualizamos la asistencia en localStorage
  }

  // Método para marcar al alumno como ausente
  marcarFalta(dia: any) {
    dia.falta = true;
    this.actualizarAsistencia(); // Actualizamos la asistencia en localStorage
  }

  // Método para guardar la asistencia actualizada en localStorage
  actualizarAsistencia() {
    if (this.alumnoSeleccionado) {
      const alumnoId = this.alumnoSeleccionado.id;
      localStorage.setItem(`asistencia_${alumnoId}`, JSON.stringify(this.dias));
    }
  }

  // Método para seleccionar un alumno
  seleccionarAlumno(alumno: any) {
    this.alumnoSeleccionado = alumno; // Establecemos el alumno seleccionado
    this.cargarAsistencia(alumno.id); // Cargamos la asistencia de ese alumno
  }

  // Método para cerrar sesión
  async volverA() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: 'Has cerrado sesión con éxito.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login-profe']);
          },
        },
      ],
    });
    await alert.present();
  }
}
