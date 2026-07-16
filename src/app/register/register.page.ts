import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import {IonContent, IonInput, IonButton, IonItem, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonInput, IonButton, IonItem, IonLabel, RouterLink]
})
export class RegisterPage {

  usuario = '';
  contrasena = '';
  confirmarContrasena = '';

  constructor(private router: Router) { }

  registrar() {

    if (
      this.usuario === '' ||
      this.contrasena === '' ||
      this.confirmarContrasena === ''
    ) {

      alert('Complete todos los campos');
      return;

    }

    if (this.contrasena !== this.confirmarContrasena) {

      alert('Las contraseñas no coinciden');
      return;

    }

    localStorage.setItem('usuario', this.usuario);
    localStorage.setItem('password', this.contrasena);

    console.log(localStorage.getItem('usuario'));
    console.log(localStorage.getItem('password'));

    alert('Cuenta creada correctamente');

    this.router.navigate(['/login']);

  }

}
