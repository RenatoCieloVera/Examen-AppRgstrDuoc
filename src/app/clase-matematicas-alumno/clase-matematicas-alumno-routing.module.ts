import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseMatematicasAlumnoPage } from './clase-matematicas-alumno.page';
import { LoginAlumnoPage } from '../login-alumno/login-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseMatematicasAlumnoPage
  },
  {
    path: 'login-alumno', // Ruta para el login del alumno
    component: LoginAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseMatematicasAlumnoPageRoutingModule {}
