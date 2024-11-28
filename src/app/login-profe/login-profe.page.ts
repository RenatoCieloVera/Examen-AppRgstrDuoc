import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importamos Router
import { ApiService } from '../services/api.service'; // Asegúrate de que ApiService esté correctamente importado

@Component({
  selector: 'app-login-profe',
  templateUrl: './login-profe.page.html',
  styleUrls: ['./login-profe.page.scss'],
})
export class LoginProfePage {
  username: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private apiService: ApiService // Inyectamos ApiService para obtener los datos de la API
  ) {}

  // Método para validar las credenciales
  async login() {
    try {
      // Obtenemos los profesores desde la API
      this.apiService.getProfesores().subscribe((profesores: any[]) => {
        // Buscamos si el profesor existe con las credenciales ingresadas
        const profeValido = profesores.find(
          (profe) => profe.usuario === this.username && profe.contrasena === this.password
        );

        if (profeValido) {
          // Si es un profesor válido
          this.showAlert('Bienvenido Profesor', `Ingreso exitoso como ${this.username}`);

          // Guardar el usuario y el rol en localStorage
          localStorage.setItem('usuario', this.username);
          localStorage.setItem('rol', 'profesor'); // Guardamos el rol como 'profesor'
          
          // Redirigir al dashboard del profesor
          this.router.navigate(['/clase-matematicas-profesor']);
        } else {
          // Si las credenciales no son válidas
          this.showAlert('Error', 'Usuario o contraseña incorrectos');
        }
      });
    } catch (error) {
      // Si hay un error al hacer la petición
      this.showAlert('Error', 'Hubo un problema al verificar las credenciales');
    }
  }

  // Método para mostrar una alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Redirige a la página de restauración de contraseña
  restA() {
    this.router.navigate(['/restaurar-pass']);
  }

  // Redirige al inicio de sesión
  goBack() {
    this.router.navigate(['/home']);
  }
}
