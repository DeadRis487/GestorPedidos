import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import {IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonItem, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonItem, IonLabel, RouterLink ]
})
export class LoginPage {

  usuario = '';
  contrasena = '';

  constructor(private router: Router) {}

  iniciarSesion() {

  const usuarioGuardado = localStorage.getItem('usuario');
  const passwordGuardado = localStorage.getItem('password');

  if (
    this.usuario === usuarioGuardado &&
    this.contrasena === passwordGuardado
  ) {

    this.router.navigate(['/main']);

  } else {

    alert("Usuario o contraseña incorrectos");

  }

}

ionViewWillEnter() {

  this.usuario = '';
  this.contrasena = '';

}

}
