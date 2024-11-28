import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // URL del backend Express

  constructor(private http: HttpClient) {}

  // Obtener todos los alumnos
  getAlumnos(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos`);
  }

  // Obtener todos los profesores
  getProfesores(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/profesores`);
  }

  // Agregar un nuevo alumno
  addAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/alumnos`, alumno);
  }

  // Agregar un nuevo profesor
  addProfesor(profesor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/profesores`, profesor);
  }
}
