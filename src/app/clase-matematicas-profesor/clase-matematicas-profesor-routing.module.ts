import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseMatematicasProfesorPage } from './clase-matematicas-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseMatematicasProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseMatematicasProfesorPageRoutingModule {}
