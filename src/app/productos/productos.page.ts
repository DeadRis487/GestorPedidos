import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonList, IonItem, IonLabel, RouterLink]
})
export class ProductosPage implements OnInit {

  constructor(
    public productosService: ProductosService
  ) {   console.log(this.productosService.obtenerProductos()); }

  ngOnInit() {
  }

}
