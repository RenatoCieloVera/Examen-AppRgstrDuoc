import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el servicio Router

@Component({
  selector: 'app-clase-matematicas-alumno',
  templateUrl: './clase-matematicas-alumno.page.html',
  styleUrls: ['./clase-matematicas-alumno.page.scss'],
})
export class ClaseMatematicasAlumnoPage {
  dias: any[] = [];  // Lista de días de asistencia

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarAsistencia();  // Cargar los días y su estado cuando el componente se inicializa
  }

  // Cargar los días y su estado desde localStorage
  cargarAsistencia() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const alumnoId = this.obtenerAlumnoId(usuario);  // Busca el id del alumno por su nombre de usuario
      const asistencia = JSON.parse(localStorage.getItem(`asistencia_${alumnoId}`) || '[]');
      this.dias = asistencia;
    }
  }

  // Método para obtener el ID del alumno a partir del nombre de usuario
  obtenerAlumnoId(usuario: string): number {
    // Aquí deberías hacer una llamada a tu API para obtener el id del alumno si lo necesitas
    return usuario === 'Damian' ? 1 : 2;  // Ejemplo: Mapear 'Damian' a id 1
  }

  // Función para volver al login
  volverA() {
    this.router.navigate(['/login-alumno']); // Redirige a la página de login
  }
}
