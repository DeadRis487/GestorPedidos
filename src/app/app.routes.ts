import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  },
];
