import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Lista de Carros', url: '/carros-list', icon: 'carro-controller' },
    { title: 'Cadastro de Carros', url: '/carros-register', icon: 'duplicate' },
    { title: 'Lista de Vendedores', url: '/vendedores-list', icon: 'duplicate' },
    { title: 'Cadastro de Vendedores', url: '/vendedores-register', icon: 'duplicate' },
  ];

  constructor() {}
}
