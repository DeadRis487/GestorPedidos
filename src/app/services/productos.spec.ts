import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];

  agregar(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
  }

}