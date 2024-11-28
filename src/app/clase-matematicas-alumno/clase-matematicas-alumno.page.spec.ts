import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaseMatematicasAlumnoPage } from './clase-matematicas-alumno.page';

describe('ClaseMatematicasAlumnoPage', () => {
  let component: ClaseMatematicasAlumnoPage;
  let fixture: ComponentFixture<ClaseMatematicasAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseMatematicasAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
