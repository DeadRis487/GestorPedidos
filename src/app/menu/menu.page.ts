import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton]
})

export class MenuPage implements OnInit {

agregarAlPedido(plato: any) {

  if (plato.cantidad > 0) {

    this.productosService.agregar({
      nombre: plato.nombre,
      precio: plato.precio,
      cantidad: plato.cantidad
    });

    plato.cantidad = 0;

    alert('Producto agregado');
  }
}

productosSeleccionados: any[] = [];

  incrementar(plato: any) {
  plato.cantidad++;
}

decrementar(plato: any) {
  if (plato.cantidad > 0) {
    plato.cantidad--;
  }
}

  entradas = [
  {
    id: 1,
    nombre: 'Choclo con Queso',
    precio: 8.00,
    imagen: 'assets/images/choclo.png',
    cantidad: 0
  },
  {
    id: 2,
    nombre: 'Escribano Arequipeño',
    precio: 10.00,
    imagen: 'assets/images/escribano.png',
    cantidad: 0
  },
  {
    id: 3,
    nombre: 'Ocopa Arequipeña',
    precio: 9.00,
    imagen: 'assets/images/ocopa.png',
    cantidad: 0
  },
  {
    id: 4,
    nombre: 'Papa Rellena Arequipeña',
    precio: 11.00,
    imagen: 'assets/images/paparellena.png',
    cantidad: 0
  }
];
  
  platos = [
  {
    id: 1,
    nombre: 'Adobo Arequipeño',
    precio: 16.00,
    imagen: 'assets/images/adobo.png',
    cantidad: 0
  },
  {
    id: 2,
    nombre: 'Chupe de Camarones',
    precio: 12.00,
    imagen: 'assets/images/chupe.png',
    cantidad: 0
  },
  {
    id: 3,
    nombre: 'Chicharrón de Chancho',
    precio: 14.00,
    imagen: 'assets/images/chicharron.png',
    cantidad: 0
  },
  {
    id: 4,
    nombre: 'Costillar Frito',
    precio: 13.50,
    imagen: 'assets/images/costillar.png',
    cantidad: 0
  }
];

bebidas = [
  {
    id: 1,
    nombre: 'Chicha Morada',
    precio: 4.00,
    imagen: 'assets/images/chicha.png',
    cantidad: 0
  },
  {
    id: 2,
    nombre: 'Limonada',
    precio: 3.50,
    imagen: 'assets/images/limonada.png',
    cantidad: 0
  },
  {
    id: 3,
    nombre: 'Jugo de Naranja',
    precio: 3.00,
    imagen: 'assets/images/naranja.png',
    cantidad: 0
  },
  {
    id: 4,
    nombre: 'Agua de Hierbas',
    precio: 2.50,
    imagen: 'assets/images/hierbas.png',
    cantidad: 0
  }
];



  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit() {
  }

}