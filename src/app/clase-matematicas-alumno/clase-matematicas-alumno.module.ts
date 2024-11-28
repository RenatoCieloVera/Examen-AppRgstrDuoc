import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseMatematicasAlumnoPageRoutingModule } from './clase-matematicas-alumno-routing.module';

import { ClaseMatematicasAlumnoPage } from './clase-matematicas-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseMatematicasAlumnoPageRoutingModule
  ],
  declarations: [ClaseMatematicasAlumnoPage]
})
export class ClaseMatematicasAlumnoPageModule {}
