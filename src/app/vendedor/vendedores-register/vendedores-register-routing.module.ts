import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedoresRegisterPage } from './vendedores-register.page';

const routes: Routes = [
  {
    path: '',
    component: VendedoresRegisterPage
  },
  {
    path: ':id',
    component: VendedoresRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedoresRegisterPageRoutingModule {}
