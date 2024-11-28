import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginProfePage } from './login-profe.page';

describe('LoginProfePage', () => {
  let component: LoginProfePage;
  let fixture: ComponentFixture<LoginProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
