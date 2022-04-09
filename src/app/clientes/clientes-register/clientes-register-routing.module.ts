import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesRegisterPage } from './clientes-register.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesRegisterPage
  },
  {
    path: ':id',
    component: ClientesRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRegisterPageRoutingModule {}
