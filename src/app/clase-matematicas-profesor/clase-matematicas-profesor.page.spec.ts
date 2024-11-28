import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaseMatematicasProfesorPage } from './clase-matematicas-profesor.page';

describe('ClaseMatematicasProfesorPage', () => {
  let component: ClaseMatematicasProfesorPage;
  let fixture: ComponentFixture<ClaseMatematicasProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseMatematicasProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
