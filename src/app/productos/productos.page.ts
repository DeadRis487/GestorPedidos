import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductosService } from '../services/productos.spec';
import { IonButton } from '@ionic/angular/standalone';
import {   IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonList, IonItem, IonLabel]
})
export class ProductosPage implements OnInit {

  constructor(
    public productosService: ProductosService
  ) { }

  ngOnInit() {
  }

}
