import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseMatematicasProfesorPageRoutingModule } from './clase-matematicas-profesor-routing.module';

import { ClaseMatematicasProfesorPage } from './clase-matematicas-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseMatematicasProfesorPageRoutingModule
  ],
  declarations: [ClaseMatematicasProfesorPage]
})
export class ClaseMatematicasProfesorPageModule {}
