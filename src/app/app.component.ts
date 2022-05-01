import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Lista de Carros', url: '/carros-list', icon: 'list' },
    { title: 'Cadastro de Carros', url: '/carros-register', icon: 'duplicate' },
    { title: 'Lista de Vendedores', url: '/vendedores-list', icon: 'list' },
    { title: 'Cadastro de Vendedores', url: '/vendedores-register', icon: 'duplicate' },
    { title: 'Comprar', url: '/comprar', icon: 'checkmark-circle' },
  ];

  constructor() {}
}
