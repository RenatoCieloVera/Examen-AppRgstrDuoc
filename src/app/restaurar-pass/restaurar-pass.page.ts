import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurar-pass', // Este es el nombre del selector
  templateUrl: './restaurar-pass.page.html', // Asegúrate de que coincidan los nombres de archivo
  styleUrls: ['./restaurar-pass.page.scss'],
})
export class RestaurarPassPage {  // Cambia el nombre aquí también
  usuario: string = '';
  email: string = '';

  usuarios = [
    { usuario: 'Marcos', email: 'marcos@ejemplo.com' },
    { usuario: 'Damian', email: 'damian@ejemplo.com' },
    { usuario: 'Profesor1', email: 'profesor1@ejemplo.com' }
  ];

  constructor(private alertController: AlertController,private router: Router,) {}

  async restaurar() {
    const usuarioExistente = this.usuarios.find(
      user => user.usuario === this.usuario || user.email === this.email
    );

    if (usuarioExistente) {
      this.showAlert('Éxito', 'Se ha enviado un correo de restauración de contraseña');
    } else {
      this.showAlert('Error', 'Usuario o correo electrónico no encontrado');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  goBack() {
    this.router.navigate(['/home']); // Aquí usas la ruta correcta para navegar a la página de inicio
  }
}
