import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Carros', url: '/carros-list', icon: 'list' },
    { title: 'Vendedores', url: '/vendedores-list', icon: 'list' },
    { title: 'Compras', url: '/compras-list', icon: 'list' },
    { title: 'Dashboard de Compras', url: '/dashboard-compras', icon: 'list'}
  ];

  constructor() {}
}
